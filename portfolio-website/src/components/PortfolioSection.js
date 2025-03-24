// PortfolioSection.js
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './PortfolioSection.css';

// Import images
import expenseTrackerImage from '../assets/images/expense-tracker.jpeg';
import netflixCloneImage from '../assets/images/netflix.jpeg';
import plantsAndFlowersImage from '../assets/images/hero-bg.jpg';

const PortfolioSection = () => {
  const [activeDot, setActiveDot] = useState(0);
  
  const projects = [
    {
      title: "Expense-Tracker",
      description: "A web app to track your expenses and manage your budget.",
      githubLink: "https://github.com/senamilemtshali/React-App-Expenses-Tracker.git"
    },
    {
      title: "Netflix-Clone",
      description: "A clone of Netflix with a modern UI and movie streaming features.",
      githubLink: "https://github.com/senamilemtshali/netflix-clone.git"
    },
    {
      title: "Plants & Flowers",
      description: "An e-commerce platform for buying plants and flowers.",
      githubLink: "https://github.com/senamilemtshali/plants-and-flowers"
    }
  ];
  
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="section-divider">
          <div className="diamond"></div>
        </div>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title} 
              description={project.description}
              githubLink={project.githubLink}
            />
          ))}
        </div>
        {/* Conditionally render dots only if there are more than 3 projects */}
        {projects.length > 3 && (
          <div className="slider-dots">
            {projects.map((_, dotIndex) => (
              <span 
                key={dotIndex}
                className={`dot ${activeDot === dotIndex ? 'active' : ''}`}
                onClick={() => setActiveDot(dotIndex)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;