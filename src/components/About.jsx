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
        <p>About me</p>
        <h2>Overview.</h2>
      </div>
      <p className="about-description">
        As a self-taught learner, I am a junior web developer with a foundation
        in JavaScript. Although I don't have formal work experience, I have
        dedicated countless hours to honing my skills and mastering technologies
        like React and Node.js.
        <br /> My goal is to become a versatile full stack developer, proficient
        in both front-end and b ack-end technologies. I am eager to collaborate
        with experienced professionals to gain valuable insights and contribute
        to innovative projects.
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
