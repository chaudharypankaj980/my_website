import React from "react";
import "./Home.css";
import { Link } from "react-router";
// import Services from "./Services";
// import About from "./About";
// import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Hi, I'm Pankaj Chaudhary Frontend React Developer</h1>
          <p>
            I create responsive, modern and user-friendly web applications using
            React, JavaScript and modern frontend technologies.
          </p>

          <button className="button-container">View Projects</button>

          <Link to="/Contact">
            <button className="button-container">Contact Me</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
