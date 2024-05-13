import AboutContent from "./AboutContent";
import "./About.scss";
import AboutData from "../assets/api/AboutData";

const About = () => {
  return (
    <div className="con-box con4 box2">
      <AboutContent AboutData={AboutData} />
    </div>
  );
};

export default About;
