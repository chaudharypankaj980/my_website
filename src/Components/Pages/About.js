import React from "react";
import "./About.css";
import profile from "../profile-pic.jpg";
import my_cv from "./my_cv.pdf"

const About = () => {
  return (
    <div>
      <section className="about-section" id="about">
        {/* LEFT SIDE */}
        <div className="about-image">
          <img
            src={profile} className="about-img"
            alt="about"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="about-content">
          <p className="about-tag">About Me</p>

          <h2>Passionate Frontend Developer Creating Modern Web Experiences</h2>

          <p className="about-description">
            I am a frontend developer focused on building responsive,
            user-friendly and modern websites using React, JavaScript and modern
            frontend technologies.
          </p>

          <p className="about-description">
            I enjoy turning ideas into real-world projects and continuously
            learning new technologies to improve my development skills.
          </p>

          {/* INFO BOXES */}
          <div className="about-info">
            <div className="info-box">
              <h3>1+</h3>
              <p>Years Learning</p>
            </div>

            <div className="info-box">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="info-box">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>
          </div>

          {/* BUTTON */}
          <a href={my_cv} download className="resume-btn">
          <button className="about-btn">Download CV</button>
        </a>
        </div>
      </section>
    </div>
  );
};

export default About;
