import Navbar from "./Navbar";
import "./Home.css";
import Showcase from "./Showcase";

const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <Navbar />
        <Showcase />
      </div>

      <div className="mid"></div>
    </div>
  );
};

export default Home;
