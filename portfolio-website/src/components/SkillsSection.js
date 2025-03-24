// SkillsSection.js
import React from 'react';
import SkillBadge from './SkillBadge';
import './SkillsSection.css';

const SkillsSection = () => {
  const skills = ['HTML', 'CSS', 'JS', 'Angular','React', 'Node.js', 'Java', 'GIT', 'Postgres','Springboot'];
  
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>My skills</h2>
        <div className="section-divider">
          <div className="diamond"></div>
        </div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillBadge key={index} name={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;