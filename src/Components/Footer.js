import "./Footer.css";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">WebCraft</h2>

          <p>
            Modern, responsive websites that help people and businesses stand
            out online.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>

          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>React Web Apps</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: chaudharypankaj057@gmail.com</p>
          <p>Phone: +91 6290591977</p>
          <p>Kolkata, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2026 WebCraft. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
