import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";

export default function TechnologyPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="page-hero">
          <span className="eyebrow">TECHNOLOGY</span>

          <h1>Understanding the digital future.</h1>

          <p>
            Thoughts about technology, artificial intelligence, innovation and
            the way digital tools shape our lives.
          </p>
        </section>

        <section className="section">
          <div className="articles-grid">
            <ArticleCard
              title="Technology and the Human Future"
              excerpt="Technology changes quickly, but human questions remain."
              category="Technology"
              date="September 10, 2026"
              image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              slug="technology-and-human-future"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}