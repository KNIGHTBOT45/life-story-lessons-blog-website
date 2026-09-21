import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VideosPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="page-hero">
          <span className="eyebrow">VIDEOS</span>

          <h1>Stories in motion.</h1>

          <p>
            Watch reflections, educational content, interviews, mentoring
            sessions and technology discussions.
          </p>
        </section>

        <section className="section">
          <div className="video-grid">
            <div className="video-card">
              <div className="video-placeholder">
                <span>▶</span>
              </div>

              <h3>Lessons from Experience</h3>

              <p>
                Reflections on learning from everyday experiences.
              </p>
            </div>

            <div className="video-card">
              <div className="video-placeholder">
                <span>▶</span>
              </div>

              <h3>The Power of Mentoring</h3>

              <p>
                Exploring the role of mentorship in personal development.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}