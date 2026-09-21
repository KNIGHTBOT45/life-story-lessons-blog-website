import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";

export default function MentoringPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="page-hero">
          <span className="eyebrow">MENTORING</span>

          <h1>Guidance can change a journey.</h1>

          <p>
            Thoughts about mentorship, leadership, guidance and meaningful
            human relationships.
          </p>
        </section>

        <section className="section">
          <div className="articles-grid">
            <ArticleCard
              title="The Value of a Good Mentor"
              excerpt="A mentor can help us see possibilities we might have missed."
              category="Mentoring"
              date="September 12, 2026"
              image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
              slug="value-of-a-good-mentor"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}