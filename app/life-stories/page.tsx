import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";

const articles = [
  {
    title: "The Lessons We Learn Along the Way",
    excerpt:
      "Sometimes the most valuable lessons in life are hidden inside ordinary experiences.",
    category: "Life Stories",
    date: "September 20, 2026",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    slug: "lessons-we-learn-along-the-way",
  },
  {
    title: "Memories That Shape Who We Become",
    excerpt:
      "Some memories remain with us because they quietly influence the people we become.",
    category: "Life Stories",
    date: "September 17, 2026",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    slug: "memories-that-shape-us",
  },
];

export default function LifeStoriesPage() {
  return (
    <>
      <Navbar />

      <main className="category-page">
        <section className="page-hero">
          <span className="eyebrow">LIFE STORIES</span>

          <h1>Experiences that become lessons.</h1>

          <p>
            Personal stories, memories, journeys and experiences that invite
            us to pause and reflect.
          </p>
        </section>

        <section className="section">
          <div className="articles-grid">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}