import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css'; // Optional: add page-specific styles if needed

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ProjectCard 
        title="League of Legends Controller Mod (Upcoming)"
        description="Enable controller support for LoL with features like joystick sensitivity tuning, cursor prediction, and acceleration control. Currently in planning phase with challenges like smooth aiming, button remapping, and multiplayer support."
        link="#"
      />
      <ProjectCard 
        title="Portfolio Website"
        description="Showcase my work as a full-stack developer. Built with HTML, CSS, JavaScript, and React. This project is currently in progress."
        link="#"
      />
    </div>
  );
};

export default Projects;
