import React from "react";
import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section className="contact-section" id="contact">
        {/* HEADER */}
        <div className="contact-header">
          <p>Contact Me</p>
          <h2>Let's Work Together</h2>

          <span>
            Have a project idea or want to collaborate? Feel free to contact me
            anytime.
          </span>
        </div>

        <div className="contact-container">
          {/* LEFT SIDE */}
          <div className="contact-info">
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />

              <div>
                <h3>Email</h3>
                {/* <p>chaudharypankaj057@gmail.com</p> */}
                <a href="mailto:chaudharypankaj057@gmail.com">chaudharypankaj057@gmail.com</a>
                

              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />

              <div>
                <h3>Location</h3>
                <p>Kolkata, India</p>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="contact-socials">
              <a href="https://github.com/chaudharypankaj980">
                <FaGithub />
              </a>

              <a href="https://linkedin.com/in/pankaj-chaudhary-b7b34529a">
                <FaLinkedin />
              </a>

              <a href="https://www.instagram.com/pankajchaudhary_980?igsh=MXZubHZ3aXFva2l4eg==">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="input-group">
              <input type="text" placeholder="Subject" />
            </div>

            <div className="input-group">
              <textarea rows="6" placeholder="Write Your Message..."></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
