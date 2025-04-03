import React from "react";
import "./projects.css"; 

const projects = [
  
  {
    title: "VardagStil-project",
    description: " skol projekt",
    image: "./images/logo.png",
    link: "https://github.com/Samer-07/VardagStil-project"
  },
  {
    title: "Freaky-Fashion",
    description: " Är en dynamisk e-handelsplattform byggd med React (frontend) och en backend kopplad till en databas. Projektet möjliggör dynamisk visning av produkter via props, samt en sida för att lägga till nya produkter. Det inkluderar även en sökfunktion som filtrerar produkter i realtid, vilket gör det enkelt för användare att hitta det de söker.",
    image: "./images/logo.png",
    link: "https://github.com/Samer-07/Freaky-Fashion.git"
  },
  {
    title: "movie-list-app",
    description: "Detta är en React-applikation som visar några av de färdigheter jag har lärt mig under min utbildning. Genom denna webbplats har jag utvecklat en djupare förståelse för att bygga användargränssnitt och hantera API-förfrågningar, samt implementera funktioner som genre-filter och visning av filmer baserat på användarval. Jag har också implementerat möjligheten att spara favoritfilmer för användare.",
    image: "./images/OIP.jpeg",
    link: "https://github.com/Samer-07/movie-list-app.git"
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
