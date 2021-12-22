import Navbar from "./Navbar";
import "./Home.css";
import Showcase from "./Showcase";
import Skills from "./Skills";
import Projects from "./Projects.js";
import Experience from "./Experience.js";

const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <Navbar />
        <Showcase />
      </div>

      <div className="mid">
        <Projects />
        <Skills />
        <Experience />
      </div>
    </div>
  );
};

export default Home;
