import "./Hero.css";
import { Link } from "react-router";

const features = [
  "Responsive websites",
  "React interfaces",
  "Clean UI systems",
];

const Hero = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="section-kicker">WebCraft by Pankaj</p>
          <h1>Modern websites that look sharp and work beautifully.</h1>
          <p>
            I design and build responsive React websites for portfolios,
            businesses, dashboards, and personal brands with clean layouts and
            polished details.
          </p>

          <div className="hero-actions">
            <Link className="hero-btn primary" to="/services">
              Explore Services
            </Link>
            <Link className="hero-btn secondary" to="/contact">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="hero-showcase" aria-label="Website highlights">
          <div className="showcase-card large">
            <span>Frontend</span>
            <strong>React websites with modern UI</strong>
          </div>
          <div className="showcase-grid">
            {features.map((feature) => (
              <div className="mini-card" key={feature}>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div>
          <p className="section-kicker">Why choose this</p>
          <h2>Fast, responsive, and built to feel premium.</h2>
        </div>

        <div className="feature-list">
          <article>
            <strong>01</strong>
            <h3>Attractive Design</h3>
            <p>Clean colors, strong spacing, and polished cards that improve first impression.</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>Mobile Ready</h3>
            <p>Layouts adapt smoothly on phones, tablets, and desktop screens.</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>React Powered</h3>
            <p>Reusable component structure that stays easy to update as your work grows.</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Hero;
