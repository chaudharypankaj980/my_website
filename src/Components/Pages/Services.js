import React from "react";
import "./Services.css";

import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <section className="services-section" id="services">
        <div className="services-header">
          <h2>My Services</h2>
          <p>
            I provide modern and responsive frontend development services for
            websites and web applications.
          </p>
        </div>

        <div className="services-container">
          {/* CARD 1 */}
          <div className="service-card">
            <div className="service-icon">
              <FaCode />
            </div>

            <h3>Frontend Development</h3>

            <p>
              Building clean, modern and interactive websites using React and
              JavaScript.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="service-card">
            <div className="service-icon">
              <FaLaptopCode />
            </div>

            <h3>React Web Apps</h3>

            <p>
              Creating scalable and responsive React applications with reusable
              components.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="service-card">
            <div className="service-icon">
              <FaMobileAlt />
            </div>

            <h3>Responsive Design</h3>

            <p>
              Mobile-friendly websites that work perfectly on all screen sizes
              and devices.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="service-card">
            <div className="service-icon">
              <FaPaintBrush />
            </div>

            <h3>UI/UX Design</h3>

            <p>
              Designing attractive and user-friendly interfaces with modern UI
              trends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
