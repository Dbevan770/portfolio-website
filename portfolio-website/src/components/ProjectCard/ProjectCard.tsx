import "./ProjectCard.css";

const ProjectCard = (props: any) => {
  const handleClick = () => {
    props.changeActiveProject(props.title);
  };

  return (
    <div
      className={`project-card ${props.isHighlighted ? "highlighted" : ""}`}
      onClick={handleClick}
    >
      <div className="project-image">
        <img
          className="project-image"
          src={`/images/projects/${props.title
            .replace(/[^A-Z0-9]/gi, "")
            .toLowerCase()}.jpg`}
        />
      </div>
      <div className="project-card-details">
        <div className="project-title">{props.title}</div>
        <div className="project-description">{props.description}</div>
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
