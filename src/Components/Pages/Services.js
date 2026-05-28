import "./Services.css";

import { FaCode, FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    text: "Clean, modern, and interactive websites using React and JavaScript.",
  },
  {
    icon: <FaLaptopCode />,
    title: "React Web Apps",
    text: "Scalable applications with reusable components and organized page structure.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    text: "Mobile-friendly layouts that look polished on phones, tablets, and desktops.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    text: "Attractive interfaces with clear spacing, readable content, and smooth user flow.",
  },
];

const Services = () => {
  return (
    <main>
      <section className="services-section" id="services">
        <div className="services-header">
          <p className="section-kicker">My Services</p>
          <h2>Everything your website needs to feel modern.</h2>
          <span>
            I provide responsive frontend development services for websites and
            web applications with a focus on clean design and usability.
          </span>
        </div>

        <div className="services-container">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
