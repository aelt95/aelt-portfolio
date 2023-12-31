import { Tilt } from "react-tilt";
import { github, stream } from "../assets";
import { projects } from "../constants";
import "./Works.css";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  github_link,
  live_link,
}) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="work-tilt-card-wraper"
    >
      <div className="work-tilt-img_icon-wraper">
        <img src={image} alt={name} />
        <div className="work-icon-wraper">
          <div
            onClick={() => window.open(github_link, "_blank")}
            className="work-icon-background"
          >
            <img src={github} alt="github" />
          </div>
          <div
            onClick={() => window.open(live_link, "_blank")}
            className="work-icon-background"
          >
            <img src={stream} alt="live-stream" />
          </div>
        </div>
      </div>
      <div className="work-tilt-card-description">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="tag-wraper">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={tag.color}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <section id="works" className="section-works">
      <div className="section-works-title">
        <p>My work</p>
        <h2>Projects.</h2>
      </div>
      <div className="section-description">
        <p>Let me show you a few examples of what I can do</p>
      </div>
      <div className="project-cards-wraper">
        {projects.map((project, index) => {
          return <ProjectCard key={`project-${index}`} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Works;
