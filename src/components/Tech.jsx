import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import "./Tech.css";

const Tech = () => {
  return (
    <div className="tech-wraper">
      {technologies.map((technology) => {
        return (
          <div className="tech-item" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default Tech;
