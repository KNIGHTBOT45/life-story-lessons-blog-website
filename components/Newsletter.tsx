"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!email) return;

    setLoading(true);
    setError("");

    const supabase = createClient();

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email: email.trim().toLowerCase(),
        active: true,
      });

    if (error) {
      console.error(error);
      setError("Unable to subscribe. Please try again.");
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setEmail("");
    setLoading(false);
  }

  return (
    <section className="newsletter">
      <div>
        <span className="eyebrow">STAY CONNECTED</span>

        <h2>Stories worth remembering.</h2>

        <p>
          Receive new stories, educational insights, motivational ideas and
          updates directly in your inbox.
        </p>
      </div>

      {submitted ? (
        <div className="newsletter-success">
          Thank you for subscribing.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>

          {error && <p className="newsletter-error">{error}</p>}
        </form>
      )}
    </section>
  );
}