import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Contact,
} from "./components";
import { StarsCanvas } from "./components/canvas";

function App() {
  return (
    <BrowserRouter>
      <div className="hero-section">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="contact-canvas">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
