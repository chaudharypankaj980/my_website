import "./Home.css";
import { Link } from "react-router";

const Home = () => {
  return (
    <main className="home">
      <section className="home-content">
        <p className="section-kicker">Frontend React Developer</p>
        <h1>Hi, I'm Pankaj Chaudhary. I build attractive web experiences.</h1>
        <p>
          I create responsive, modern, and user-friendly web applications using
          React, JavaScript, and clean frontend practices.
        </p>

        <div className="home-actions">
          <Link className="home-btn primary" to="/services">
            View Services
          </Link>
          <Link className="home-btn secondary" to="/contact">
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
