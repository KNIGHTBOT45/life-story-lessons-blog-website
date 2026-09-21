export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Life Story Lessons</div>

          <p>
            Stories, ideas, people and experiences that inspire us to learn,
            reflect, grow and create a better life.
          </p>
        </div>

        <div>
          <h3>Explore</h3>

          <a href="/life-stories">Life Stories</a>
          <a href="/education">Education</a>
          <a href="/motivation">Motivation</a>
          <a href="/mentoring">Mentoring</a>
          <a href="/technology">Technology</a>
        </div>

        <div>
          <h3>Connect</h3>

          <a href="/about">About Me</a>
          <a href="/contact">Contact</a>
          <a href="/videos">Videos</a>
        </div>

        <div>
          <h3>Social</h3>

          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Life Story Lessons</span>
        <span>Learn from Life. Grow Beyond Lessons.</span>
      </div>
    </footer>
  );
}