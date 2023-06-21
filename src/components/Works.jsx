import { Tilt } from "react-tilt";
import { github } from "../assets";
import { projects } from "../constants";
import "./Works.css";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="work-tilt-card-wraper"
    >
      <div className="work-tilt-img_icon-wraper">
        <img src={image} alt={name} />
        <div className="work-icon-wraper">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="work-icon-background"
          >
            <img src={github} alt="github" />
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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non tempore
          odio sequi est, sunt placeat animi id dolores repellat necessitatibus
          iste dolore! Blanditiis velit ab voluptatibus animi repellat? Error,
          atque.
        </p>
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
