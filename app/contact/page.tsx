import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="page-hero">
          <span className="eyebrow">CONTACT</span>

          <h1>Let's connect.</h1>

          <p>
            For collaborations, mentoring, guest articles, speaking
            opportunities or general enquiries.
          </p>
        </section>

        <section className="contact-section">
          <div>
            <span className="eyebrow">GET IN TOUCH</span>

            <h2>Have something to share?</h2>

            <p>
              Use the form to send a message. We can later connect this form
              to an email service or database.
            </p>

            <p>
              Email: hello@lifestorylessons.blog
            </p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your name" required />

            <input type="email" placeholder="Email address" required />

            <input type="text" placeholder="Subject" />

            <textarea
              placeholder="Your message"
              rows={7}
              required
            />

            <button type="submit" className="button button-dark">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}