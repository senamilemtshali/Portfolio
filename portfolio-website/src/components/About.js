// AboutSection.js
import React from 'react';
import './About.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About me</h2>
        <div className="section-divider">
          <div className="diamond"></div>
        </div>
        <p className="about-text">
        Hi, I am Senamile Mtshali, a passionate developer with a background in Economics and Econometrics, currently diving deep into full-stack development. After earning my degree, I realized that my childhood passion for fixing things and helping others could evolve into a career in technology. This led me to pursue coding, where I now create solutions that make a difference.

With experience in both front-end and back-end technologies, I specialize in building responsive, user-friendly web applications using frameworks like React and styling them with Tailwind CSS. My journey is fueled by a desire to blend creativity with logic, ensuring every project is not only functional but also visually appealing.

I believe in continuous learning, and I am always looking for new challenges to improve my skills and knowledge. Whether it is developing healthcare management systems, automating test processes, or exploring new technologies, I am excited about the future and the role I can play in shaping it through tech.

Thank you for visiting my portfolio, and I look forward to connecting with you!</p>
      </div>
    </section>
  );
};

export default AboutSection;