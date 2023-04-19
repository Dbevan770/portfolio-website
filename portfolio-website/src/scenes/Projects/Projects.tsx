import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useState, useEffect } from "react";
import ProjectShowcase from "../../components/ProjectShowcase/ProjectShowcase";

interface Project {
  title: string;
  short_desc: string;
  tag: string;
  live?: string;
  code: string;
  full_desc: string;
  languages: Array<string>;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Array<Project>>([]);

  const handleChangeActiveProject = (index: number) => {
    setActiveProject(projects[index]);
  };

  const fetchProjects = async () => {
    let retries = 0;
    const maxRetries = 3;

    while (retries < maxRetries) {
      try {
        const response = await fetch("./assets/projects.json");
        const jsonResponse = await response.json();
        console.log("Fetched projects:", jsonResponse); // debug statement
        setProjects(jsonResponse);
        console.log("Updated projects state:", projects); // debug statement
        return;
      } catch (err) {
        console.log(err);
        retries++;
        await new Promise((resolve) => setTimeout(resolve, 5000)); // wait 5 seconds before retrying
      }
    }

    console.log(`Failed to fetch projects after ${maxRetries} attempts`);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="projects" id="projects">
      <section className="projects-section">
        <div className="projects-header">
          <h3 className="projects-title">Projects</h3>
          <span className="projects-subtitle">Click to see more!</span>
        </div>
        {activeProject && (
          <div className="project-summary-showcase">
            <ProjectShowcase activeProject={activeProject} />
            <div className="project-showcase-bg"></div>
          </div>
        )}
        <div className="projects-container">
          {projects &&
            projects.map((project: Project, index: number) => (
              <ProjectCard
                key={index}
                {...project}
                id={index}
                changeActiveProject={handleChangeActiveProject}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
