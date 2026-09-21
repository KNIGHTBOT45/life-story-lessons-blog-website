import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <Navbar />

      <main>
        <article className="post-page">
          <header className="post-header">
            <span className="eyebrow">LIFE STORIES</span>

            <h1>The Lessons We Learn Along the Way</h1>

            <p className="post-excerpt">
              Sometimes the most valuable lessons in life are hidden inside
              ordinary experiences.
            </p>

            <div className="post-meta">
              September 20, 2026 · 5 min read
            </div>
          </header>

          <img
            className="post-cover"
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
            alt="Life journey"
          />

          <div className="post-body">
            <p>
              Life rarely gives us a clear instruction manual. We move through
              different experiences, make decisions, meet people and
              occasionally discover that an ordinary moment carried a lesson
              we did not notice at first.
            </p>

            <p>
              Looking back is sometimes the best way to understand how much we
              have learned.
            </p>

            <h2>Lessons are everywhere</h2>

            <p>
              A conversation can teach us patience. A mistake can teach us
              responsibility. A difficult journey can teach us resilience.
            </p>

            <p>
              The important part is not simply experiencing these moments.
              Reflection transforms experience into understanding.
            </p>

            <h2>Keep learning</h2>

            <p>
              The journey continues, and every chapter gives us another
              opportunity to learn something new.
            </p>

            <div className="post-share">
              <strong>Share this story</strong>

              <div>
                <button>Facebook</button>
                <button>WhatsApp</button>
                <button>LinkedIn</button>
                <button>X</button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}