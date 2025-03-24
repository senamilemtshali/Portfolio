// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, githubLink }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="github-link"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;