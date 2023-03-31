import "./About.css";
import { useState } from "react";
import SkillBio from "../../components/SkillBio/SkillBio";

const About = () => {
  const [active, setActive] = useState<string>("about");
  const [activeImg, setActiveImg] = useState<string>("ts");

  const handleToggle = () => {
    if (active === "about") {
      setActive("skills");
    } else {
      setActive("about");
    }
  };

  const changeActiveImg = (name: string) => {
    setActiveImg(name);
  };

  return (
    <div className="about" id="about">
      <section className="about-section">
        <div className="toggle-container">
          <span
            className={`toggle-label ${
              active === "about" ? "active-label" : ""
            }`}
          >
            About Me
          </span>
          <label className="switch">
            <input type="checkbox" onClick={handleToggle} />
            <span className="slider"></span>
          </label>
          <span
            className={`toggle-label ${
              active === "skills" ? "active-label" : ""
            }`}
          >
            Skills & Technologies
          </span>
        </div>
        <div className="about-container">
          {active === "about" ? (
            <div className="about-content">
              <img className="about-image" src="/images/about-me-image.JPG" />
              <p className="about-bio">
                I have been programming for over 10 years as a hobby, initially
                starting with C# to learn the Unity3D game engine. I joined the
                Army out of high school as an Infantryman before changing my job
                to a Cyber Operations Specialist. During the school, I learned
                C++ and Python. As time went on I spent more time exploring
                developing my own websites initially with purely front-end but
                as I discovered my knack for backend infrastructure and
                leveraging my networking expertise I dedicated myself to the
                full-stack pipeline.
              </p>
            </div>
          ) : (
            <div className="skills-content">
              <div className="skill-grid">
                <img
                  className={activeImg === "ts" ? "active-img" : ""}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="Typescript"
                  onClick={() => changeActiveImg("ts")}
                />
                <img
                  className={activeImg === "js" ? "active-img" : ""}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="Javascript"
                  onClick={() => changeActiveImg("js")}
                />
                <img
                  className={activeImg === "nodejs" ? "active-img" : ""}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="NodeJS"
                  onClick={() => changeActiveImg("nodejs")}
                />
                <img
                  className={activeImg === "react" ? "active-img" : ""}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  onClick={() => changeActiveImg("react")}
                />

                <img
                  className={activeImg === "html" ? "active-img" : ""}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML"
                  onClick={() => changeActiveImg("html")}
                />
                <img
                  className={activeImg === "css" ? "active-img" : ""}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS"
                  onClick={() => changeActiveImg("css")}
                />
                <img
                  className={activeImg === "redux" ? "active-img" : ""}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  alt="Redux"
                  onClick={() => changeActiveImg("redux")}
                />
                <img
                  className={activeImg === "mongo" ? "active-img" : ""}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  onClick={() => changeActiveImg("mongo")}
                />

                <img
                  className={activeImg === "py" ? "active-img" : ""}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                  onClick={() => changeActiveImg("py")}
                />
                <img
                  className={activeImg === "cs" ? "active-img" : ""}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  alt="CSharp"
                  onClick={() => changeActiveImg("cs")}
                />
                <img
                  className={activeImg === "cpp" ? "active-img" : ""}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  alt="CPlusPlus"
                  onClick={() => changeActiveImg("cpp")}
                />
                <img
                  className={activeImg === "sql" ? "active-img" : ""}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                  onClick={() => changeActiveImg("sql")}
                />
              </div>
              <div className="skill-desc">
                <SkillBio language={activeImg} />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
