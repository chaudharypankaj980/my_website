import "./Contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <main>
      <section className="contact-section" id="contact">
        <div className="contact-header">
          <p className="section-kicker">Contact Me</p>
          <h2>Let's work together.</h2>

          <span>
            Have a project idea, website update, or collaboration in mind? Send
            a message and I will be happy to connect.
          </span>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <article className="contact-card">
              <FaEnvelope className="contact-icon" />

              <div>
                <h3>Email</h3>
                <a href="mailto:chaudharypankaj057@gmail.com">
                  chaudharypankaj057@gmail.com
                </a>
              </div>
            </article>

            <article className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />

              <div>
                <h3>Location</h3>
                <p>Kolkata, India</p>
              </div>
            </article>

            <div className="contact-socials">
              <a
                href="https://github.com/chaudharypankaj980"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/pankaj-chaudhary-b7b34529a"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/pankajchaudhary_980?igsh=MXZubHZ3aXFva2l4eg=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profile"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Your Name" aria-label="Your Name" />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Your Email" aria-label="Your Email" />
            </div>

            <div className="input-group">
              <input type="text" placeholder="Subject" aria-label="Subject" />
            </div>

            <div className="input-group">
              <textarea rows="6" placeholder="Write Your Message..." aria-label="Message"></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
