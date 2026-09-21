import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";

export default function EducationPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="page-hero">
          <span className="eyebrow">EDUCATION</span>

          <h1>Learning beyond the classroom.</h1>

          <p>
            Ideas about education, knowledge, learning, teaching and personal
            development.
          </p>
        </section>

        <section className="section">
          <div className="articles-grid">
            <ArticleCard
              title="Why Learning Never Really Ends"
              excerpt="Education continues throughout our lives."
              category="Education"
              date="September 18, 2026"
              image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80"
              slug="why-learning-never-really-ends"
            />

            <ArticleCard
              title="The Teacher Who Changed My Thinking"
              excerpt="Sometimes one teacher can influence an entire journey."
              category="Education"
              date="September 14, 2026"
              image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
              slug="teacher-who-changed-my-thinking"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}