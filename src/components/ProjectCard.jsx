// src/components/ProjectCard.jsx
import React from "react";
import "../styles/project.css"; // Import project-specific styles

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <div className="project-title">
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
