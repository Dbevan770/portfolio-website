import "./ProjectCard.css";
import ImgPlaceholder from "../ImgPlaceholder/ImgPlaceholder";
import { useState } from "react";

const ProjectCard = (props: any) => {
  const id = props.id;

  const style = {
    backgroundImage: `url(/images/projects/${props.title
      .replace(/[^A-Z0-9]/gi, "")
      .toLowerCase()}.avif)`,
  };

  const handleClick = () => {
    props.changeActiveProject(id);
  };

  return (
    <div className="project-card" style={style}>
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-body">{props.short_desc}</p>
        <a
          href="javascript:void(0)"
          className="card-button"
          onClick={handleClick}
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
