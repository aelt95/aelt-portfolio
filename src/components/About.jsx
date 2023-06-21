import { Tilt } from "react-tilt";
import { services } from "../constants";
import "./About.css";

const ServiceCard = ({ title, icon }) => {
  return (
    <Tilt className="tilt-card-wraper">
      <div className="about-tilt-card-wraper">
        <div className="tilt-card-content">
          <img src={icon} alt={title} />
          <h3>{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <p>Introduction</p>
        <h2>Overview.</h2>
      </div>
      <p className="about-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, facilis
        sint molestiae aut qui vero illum reprehenderit tempora, deserunt
        quaerat amet in quis earum adipisci eveniet fugiat quisquam, dolores
        voluptatem.
      </p>
      <div className="about-card-wraper">
        {services.map((service) => {
          return <ServiceCard key={service.title} {...service} />;
        })}
      </div>
    </section>
  );
};

export default About;
