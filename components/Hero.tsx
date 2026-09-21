export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=85"
          alt="A peaceful journey"
        />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="eyebrow hero-eyebrow">
          LIFE STORIES • EDUCATION • MOTIVATION
        </span>

        <h1>
          Learn from Life.
          <br />
          <em>Grow Beyond Lessons.</em>
        </h1>

        <p>
          Stories, ideas, people and experiences that inspire us to learn,
          reflect, grow and create a better life.
        </p>

        <div className="hero-buttons">
          <a href="/life-stories" className="button button-light">
            Explore Stories
          </a>

          <a href="/about" className="button button-outline">
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}