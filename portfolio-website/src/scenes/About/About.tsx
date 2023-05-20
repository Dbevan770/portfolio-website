import "./About.css";
import { useState, useEffect, useRef } from "react";
import SkillBio from "../../components/SkillBio/SkillBio";
import ImgPlaceholder from "../../components/ImgPlaceholder/ImgPlaceholder";

export interface Language {
  id: string;
  title: string;
  bio: string;
}

const About = () => {
  const [active, setActive] = useState<string>("about");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeImg, setActiveImg] = useState<string>("typescript");
  const [languages, setLanguages] = useState<Language[]>([]);

  const fetchLanguages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("./assets/languagebios.json");
      const jsonResponse = await response.json();
      const languagesArray = Object.keys(jsonResponse).map((key) => ({
        id: key,
        ...jsonResponse[key],
      }));
      setLanguages(languagesArray);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleToggle = () => {
    if (active === "about") {
      setActive("skills");
      fetchLanguages();
    } else {
      setActive("about");
    }
  };

  const changeActiveImg = (id: string) => {
    setActiveImg(id);
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
            <label htmlFor="about-toggle"></label>
            <input name="about-toggle" type="checkbox" onClick={handleToggle} />
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
        {active === "about" ? (
          <div className="about-content">
            <ImgPlaceholder
              containerClass="about-image-container"
              imgClass="about-image"
              src="/images/About_Me.PNG"
              width="661px"
              height="462px"
            />
            <p className="about-bio">
              I have been programming for over 10 years as a hobby, initially
              starting with C# to learn the Unity3D game engine. I joined the
              Army out of high school as an Infantryman before changing my job
              to a Cyber Operations Specialist. During the school, I learned C++
              and Python. <br />
              <br /> As time went on I spent more time exploring developing my
              own websites initially with purely front-end but as I discovered
              my knack for backend infrastructure and leveraging my networking
              expertise I dedicated myself to the full-stack pipeline.
            </p>
          </div>
        ) : (
          <div className="skills-content">
            {isLoading ? (
              <>
                <div className="skills-loading"></div>
                <div className="description-loading">
                  <div className="description-loading-title"></div>
                  <div className="description-loading-bio"></div>
                </div>
              </>
            ) : (
              <>
                <div className="skill-grid">
                  {languages &&
                    languages.map((language: any, index: number) => {
                      return (
                        <div className="skill-grid-item-container" key={index}>
                          <ImgPlaceholder
                            containerClass="skill-grid-item-container"
                            imgClass={`skill-grid-item ${
                              activeImg === language.id ? "active-img" : ""
                            }`}
                            src={`/icons/languages/${language.id}-original.svg`}
                            width="80px"
                            height="80px"
                            callback={changeActiveImg}
                            id={language.id}
                          />
                          <span className="skill-grid-tagline">
                            {language.title}
                          </span>
                        </div>
                      );
                    })}
                </div>
                <div className="skill-desc">
                  <SkillBio
                    language={languages.find((lang) => lang.id === activeImg)}
                  />
                </div>
              </>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default About;
