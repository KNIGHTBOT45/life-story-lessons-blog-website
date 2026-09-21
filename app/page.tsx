import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import CategoryCard from "@/components/CategoryCard";
import Newsletter from "@/components/Newsletter";
import { createClient } from "@/lib/supabase/server";

const categoryData = [
  {
    title: "Life Stories",
    description:
      "Experiences, memories and lessons from real life.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=80",
    href: "/life-stories",
  },
  {
    title: "Education",
    description:
      "Ideas about learning, knowledge and personal development.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
    href: "/education",
  },
  {
    title: "Motivation",
    description:
      "Thoughts that encourage action, courage and growth.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    href: "/motivation",
  },
  {
    title: "Mentoring",
    description:
      "Guidance, leadership and meaningful human connections.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
    href: "/mentoring",
  },
  {
    title: "Technology",
    description:
      "Technology, AI, innovation and the digital future.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
    href: "/technology",
  },
];

export default async function Home() {
  const supabase = await createClient();

  /*
   * Get published posts from Supabase.
   */
  const { data: posts, error } = await supabase
    .from("posts")
    .select(`
      id,
      title,
      slug,
      excerpt,
      featured_image,
      published_at,
      categories (
        name
      )
    `)
    .eq("status", "published")
    .order("published_at", {
      ascending: false,
    })
    .limit(12);

  if (error) {
    console.error("Error loading posts:", error);
  }

  /*
   * Convert Supabase data into the format
   * expected by ArticleCard.
   */
  const articles =
    posts?.map((post: any) => ({
      title: post.title,
      excerpt: post.excerpt || "",
      category: post.categories?.name || "Life Stories",
      date: post.published_at
        ? new Date(post.published_at).toLocaleDateString(
            "en-US",
            {
              month: "long",
              day: "numeric",
              year: "numeric",
            }
          )
        : "",
      image:
        post.featured_image ||
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
      slug: post.slug,
    })) || [];

  /*
   * First 3 published articles become featured.
   */
  const featuredArticles = articles.slice(0, 3);

  /*
   * Next 6 published articles become latest.
   */
  const latestArticles = articles.slice(3, 9);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* ================================
            FEATURED ARTICLES
        ================================= */}

        <section className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FEATURED</span>

              <h2>Stories that stay with you.</h2>
            </div>

            <a
              href="/life-stories"
              className="text-link"
            >
              View all stories →
            </a>
          </div>

          {featuredArticles.length > 0 ? (
            <div className="featured-grid">
              {featuredArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  {...article}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No articles yet.</h3>

              <p>
                Published articles will appear here.
              </p>
            </div>
          )}
        </section>

        {/* ================================
            CATEGORIES
        ================================= */}

        <section className="section section-muted">
          <div className="section-heading centered">
            <span className="eyebrow">EXPLORE</span>

            <h2>Something for every journey.</h2>

            <p>
              Explore stories, knowledge and ideas
              across the themes that shape our lives.
            </p>
          </div>

          <div className="categories-grid">
            {categoryData.map((category) => (
              <CategoryCard
                key={category.title}
                {...category}
              />
            ))}
          </div>
        </section>

        {/* ================================
            LATEST ARTICLES
        ================================= */}

        <section className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">LATEST</span>

              <h2>Fresh from the journal.</h2>
            </div>

            <a
              href="/life-stories"
              className="text-link"
            >
              Browse articles →
            </a>
          </div>

          {latestArticles.length > 0 ? (
            <div className="articles-grid">
              {latestArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  {...article}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>More stories are coming.</h3>

              <p>
                New articles will appear here after
                they are published.
              </p>
            </div>
          )}
        </section>

        {/* ================================
            PHILOSOPHY
        ================================= */}

        <section className="quote-section">
          <div>
            <span className="eyebrow">
              A SIMPLE PHILOSOPHY
            </span>

            <blockquote>
              “Every experience has something to teach
              us, if we are willing to stop, reflect
              and listen.”
            </blockquote>

            <p>— Life Story Lessons</p>
          </div>
        </section>

        {/* ================================
            VIDEOS
        ================================= */}

        <section className="section video-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WATCH</span>

              <h2>Ideas in motion.</h2>
            </div>

            <a
              href="/videos"
              className="text-link"
            >
              View all videos →
            </a>
          </div>

          <div className="video-grid">
            <div className="video-card">
              <div className="video-placeholder">
                <span>▶</span>
              </div>

              <h3>Lessons from Experience</h3>

              <p>
                A short reflection on learning from
                everyday life.
              </p>
            </div>

            <div className="video-card">
              <div className="video-placeholder">
                <span>▶</span>
              </div>

              <h3>The Power of Mentoring</h3>

              <p>
                Why guidance and human connection
                matter.
              </p>
            </div>

            <div className="video-card">
              <div className="video-placeholder">
                <span>▶</span>
              </div>

              <h3>Technology and Tomorrow</h3>

              <p>
                Exploring how technology is changing
                our lives.
              </p>
            </div>
          </div>
        </section>

        {/* ================================
            ABOUT
        ================================= */}

        <section className="about-preview">
          <div className="about-image">
            <img
              src="/about-me.jpg"
              alt="About the author"
            />
          </div>

          <div className="about-content">
            <span className="eyebrow">
              ABOUT ME
            </span>

            <h2>
              Stories become meaningful when they are
              shared.
            </h2>

            <p>
              Life Story Lessons is a personal platform
              dedicated to sharing experiences,
              educational insights, motivation,
              mentoring ideas and thoughts about
              technology.
            </p>

            <p>
              The aim is simple: to create a place where
              experiences become lessons and lessons
              become opportunities for growth.
            </p>

            <a
              href="/about"
              className="button button-dark"
            >
              Read My Story
            </a>
          </div>
        </section>

        {/* ================================
            NEWSLETTER
        ================================= */}

        <Newsletter />
      </main>

      <Footer />
    </>
  );
}