import "./About.css";
import { useState, useEffect, useRef } from "react";
import SkillBio from "../../components/SkillBio/SkillBio";

const About = () => {
  const [active, setActive] = useState<string>("about");
  const [activeImg, setActiveImg] = useState<string>("typescript");
  const languages = [
    "typescript",
    "javascript",
    "nodejs",
    "react",
    "html5",
    "css3",
    "redux",
    "mongodb",
    "python",
    "csharp",
    "cplusplus",
    "mysql",
  ];
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("I have been spotted!");
      }
    });
  };

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

  useEffect(() => {
    const options = {
      rootMargin: "-200px 0px -50% 0px",
      threshold: 0.4,
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="about" id="about" ref={sectionRef}>
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
                {languages &&
                  languages.map((language: string, index: number) => {
                    return (
                      <div className="skill-grid-item-container" key={index}>
                        <img
                          className={`skill-grid-item ${
                            activeImg === language ? "active-img" : ""
                          }`}
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${language}/${language}-original.svg`}
                          alt={language}
                          onClick={() => changeActiveImg(language)}
                        />
                        <span className="skill-grid-tagline">{language}</span>
                      </div>
                    );
                  })}
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
