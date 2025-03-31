import React from "react";
import "./projects.css"; 

const projects = [
  
  {
    title: "VardagStil-project",
    description: " skol projekt",
    image: "./images/logo.png",
    link: "https://github.com/Samer-07/VardagStil-project"
  },

];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image}  className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
