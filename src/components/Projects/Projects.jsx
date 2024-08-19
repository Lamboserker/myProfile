import React from "react";
import { projects } from "./data/projectsData"; // Importiere die Projektdaten
import "../CSS/Projects.css";

function Projects() {
  return (
    <div className="timeline-container">
      <div className="entries">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`entry ${project.cssClass ? project.cssClass : ""}`} // CSS-Klassen dynamisch anwenden
          >
            <div className={`title ${project.isBigTitle ? "big" : ""}`}>
              {project.title}
            </div>
            <div className="body">
              <p>{project.description}</p>
              {project.link && (
                <button className="btn">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.image && !project.cssClass && (
                      <img className="icon" src={project.image} alt="GitHub" />
                    )}
                    <span className="text">visit github</span>
                  </a>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
