import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="simple-page">
        <section className="page-hero">
          <span className="eyebrow">ABOUT ME</span>
          <h1>A life of learning, sharing and growing.</h1>
          <p>
            Welcome to Life Story Lessons — a personal platform for stories,
            education, motivation, mentoring and technology.
          </p>
        </section>

        <section className="about-profile">
          <div>
            <img
              src="/about-me.jpg"
              alt="Author"
            />
          </div>

          <div>
            <span className="eyebrow">MY STORY</span>

            <h2>About Me</h2>

            <p>
              I believe that every person carries experiences worth sharing.
              Some experiences teach us directly, while others become
              meaningful only after we reflect on them.
            </p>

            <p>
              Through Life Story Lessons, I share thoughts and experiences
              around life, education, motivation, mentoring, personal growth
              and technology.
            </p>

            <h3>Education</h3>
            <p>
              Add your educational qualifications, institutions and areas of
              study here.
            </p>

            <h3>Professional Experience</h3>
            <p>
              Add your professional background, experience and areas of work
              here.
            </p>

            <h3>Books & Publications</h3>
            <p>
              Add your books, articles, research, publications and other work
              here.
            </p>

            <h3>Philosophy</h3>
            <p>
              To share stories, knowledge, experiences and ideas that inspire
              people to learn, reflect, grow and create a better life.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}