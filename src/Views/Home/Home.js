import Showcase from "./Showcase";
import Skills from "./Skills";
import Projects from "./Projects.js";
import Experience from "./Experience.js";
import { motion } from "framer-motion";
import { routeAnimation } from "../../preferences/animationPrefs";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="home"
      variants={routeAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="top">
        <Showcase />
      </div>

      <div className="mid">
        <Projects />
        <Skills />
        <Experience />
      </div>
    </motion.div>
  );
};

export default Home;
