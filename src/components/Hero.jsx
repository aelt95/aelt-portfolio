import { ComputersCanvas } from "./canvas";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wraper">
      <div className="header">
        <div className="header-style-wraper">
          <div className="header-style-circle" />
          <div className="header-style-bar" />
        </div>
        <div>
          <h1 className="hero-header-text">
            Hi, I'm <span className="text-[#915eff] ">Anthony</span>
          </h1>
          <p className="hero-subheader-text">Junior web developer</p>
        </div>
      </div>
      <div className="computer-wraper">
        <ComputersCanvas />
      </div>
      <div className="scroll-indicator">
        <a href="#about">
          <div className="scroll-container">
            <div className="scroll-ball"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
