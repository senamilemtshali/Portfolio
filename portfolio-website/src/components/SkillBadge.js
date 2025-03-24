// SkillBadge.js
import React from 'react';
import './SkillBadge.css';

const SkillBadge = ({ name }) => {
  return (
    <div className="skill-badge">
      {name}
    </div>
  );
};

export default SkillBadge;