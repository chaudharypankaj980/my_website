import "./Navbar.css";
import { NavLink } from "react-router";
import profile from "./profile-pic.jpg";

const Navbar = () => {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-left" aria-label="WebCraft home">
        <img src={profile} alt="Pankaj Chaudhary" className="profile-img" />

        <div className="profile-info">
          <h2>Pankaj Chaudhary</h2>
          <span>Frontend Developer</span>
        </div>
      </NavLink>

      <nav aria-label="Primary navigation">
        <ul className="nav-links">
          <li>
            <NavLink to="/home" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
