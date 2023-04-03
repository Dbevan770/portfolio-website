import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

interface Project {
  title: string;
  description: string;
  languages: Array<string>;
  github: string;
  live?: string;
}

const Projects = (props: Project) => {
  const projects: Array<Project> = [
    {
      title: "Mystery Inc. Bookstore",
      description:
        "A bookstore made with the MERN stack. Senior group project from College",
      languages: ["js", "react", "mongo", "nodejs"],
      github: "https://github.com/Dbevan770/Onlinebookstore-group-4",
      live: "https://ec2-54-175-236-193.compute-1.amazonaws.com/",
    },
    {
      title: "Destiny Mod Checker",
      description:
        "A Discord Bot used to track merchants inside of the game Destiny 2.",
      languages: ["py"],
      github: "https://github.com/Dbevan770/destiny-mod-checker",
    },
    {
      title: "Bank Tracker",
      description:
        "Application that allows you to upload a bank CSV and have it upload the information to Google Sheets with formatting.",
      languages: ["py", "js", "html", "css"],
      github: "https://github.com/Dbevan770/bank-tracker",
    },
  ];

  return (
    <div className="projects" id="projects">
      <section className="projects-section">
        <div className="projects-header">
          <h3 className="projects-title">Projects</h3>
          <span className="projects-subtitle">Click to See More!</span>
        </div>
        <div className="project-summary-showcase">
          <div className="project-showcase-bg"></div>
        </div>
        <div className="projects-container">
          {projects &&
            projects.map((project: Project) => <ProjectCard {...project} />)}
        </div>
      </section>
    </div>
  );
};

export default Projects;
