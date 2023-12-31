import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import "./Experience.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="company-img-container">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="company-img"
          />
        </div>
      }
    >
      <div className="vertical-timeline-element-title">
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="experience-points">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="experience-point-li">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id="section-experience" className="section-experience">
      <div className="section-experience-header">
        <p>How did I end up here?</p>
        <h2>My Journey.</h2>
      </div>

      <div className="experience-vertical-timeline-wraper">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
export default Experience;
