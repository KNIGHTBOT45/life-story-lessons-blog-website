import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";

export default function MotivationPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="page-hero">
          <span className="eyebrow">MOTIVATION</span>

          <h1>Keep moving forward.</h1>

          <p>
            Reflections and ideas about courage, resilience, purpose and
            personal growth.
          </p>
        </section>

        <section className="section">
          <div className="articles-grid">
            <ArticleCard
              title="Starting Again Is Also Progress"
              excerpt="Beginning again can be an act of courage."
              category="Motivation"
              date="September 15, 2026"
              image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
              slug="starting-again-is-progress"
            />

            <ArticleCard
              title="What Failure Can Teach Us"
              excerpt="Failure can become part of the learning process."
              category="Motivation"
              date="September 8, 2026"
              image="https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1200&q=80"
              slug="what-failure-can-teach-us"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}