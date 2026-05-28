import "./About.css";
import profile from "../profile-pic.jpg";
import my_cv from "./my_cv.pdf";

const stats = [
  { value: "1+", label: "Years Learning" },
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Technologies" },
];

const About = () => {
  return (
    <main>
      <section className="about-section" id="about">
        <div className="about-image">
          <div className="about-frame">
            <img src={profile} className="about-img" alt="Pankaj Chaudhary" />
          </div>
        </div>

        <div className="about-content">
          <p className="section-kicker">About Me</p>

          <h2>Passionate frontend developer creating modern web experiences.</h2>

          <p className="about-description">
            I focus on building responsive, user-friendly, and attractive
            websites using React, JavaScript, and modern frontend technologies.
          </p>

          <p className="about-description">
            I enjoy turning ideas into real-world projects, improving visual
            details, and learning better ways to create smooth user experiences.
          </p>

          <div className="about-info">
            {stats.map((stat) => (
              <article className="info-box" key={stat.label}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>

          <a href={my_cv} download className="about-btn">
            Download CV
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
