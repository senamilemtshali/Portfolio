// HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Hi there! My name is Senamile Mtshali and I'm a <span>full-stack developer</span></h1>
        <a 
          href="/SenamileCV.pdf" 
          download="Senamile-CV.pdf" 
          className="cta-button"
        >
          Download the CV
        </a>
      </div>
    </section>
  );
};

export default HeroSection;