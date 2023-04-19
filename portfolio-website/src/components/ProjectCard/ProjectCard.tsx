import "./ProjectCard.css";
import ImgPlaceholder from "../ImgPlaceholder/ImgPlaceholder";
import { useState } from "react";

const ProjectCard = (props: any) => {
  const id = props.id;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleClick = () => {
    props.changeActiveProject(id);
    setActiveIndex(id);
  };

  return (
    <div
      className={`project-card ${activeIndex === id ? "highlighted" : ""}`}
      onClick={handleClick}
    >
      <div className="project-image">
        <ImgPlaceholder
          containerClass="project-image-container"
          imgClass="project-image"
          src={`/images/projects/${props.title
            .replace(/[^A-Z0-9]/gi, "")
            .toLowerCase()}.avif`}
          width="450px"
          height="235px"
        />
      </div>
      <div className="project-card-details">
        <div className="project-title">{props.title}</div>
        <div className="project-description">{props.short_desc}</div>
        <div className="project-btns">
          {props.live && (
            <a href={props.live} className="project-btn" target="_blank">
              Live
            </a>
          )}
          <a href={props.github} className="project-btn" target="_blank">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
