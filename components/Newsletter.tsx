"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!email) return;

    setSubmitted(true);
    setEmail("");
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

          <button type="submit">Subscribe</button>
        </form>
      )}
    </section>
  );
}