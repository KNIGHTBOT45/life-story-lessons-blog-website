"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to subscribe.");
        return;
      }

      setMessage(data.message || "You have been subscribed successfully.");
      setEmail("");
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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

      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {message && (
        <p className="newsletter-success">
          {message}
        </p>
      )}

      {error && (
        <p className="newsletter-error">
          {error}
        </p>
      )}
    </section>
  );
}