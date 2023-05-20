import "./ProjectCard.css";

const ProjectCard = (props: any) => {
  const id = props.id;

  const style = {
    backgroundImage: `url(/images/projects/${props.title
      .replace(/[^A-Z0-9]/gi, "")
      .toLowerCase()}.jpg)`,
  };

  const handleClick = () => {
    props.changeActiveProject(id);
  };

  return (
    <div className="project-card" style={style}>
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-body">{props.short_desc}</p>
        <button onClick={handleClick} className="card-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
