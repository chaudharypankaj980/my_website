import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router";
import profile from "./profile-pic.jpg";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        {/* Left Section */}
        <div className="navbar-left">
          <img src={profile} alt="Profile" className="profile-img" />

          <div className="profile-info">
            <h2>Pankaj Chaudhary</h2>
            <span>Frontend Developer</span>
          </div>
        </div>

        {/* Right Section */}
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
