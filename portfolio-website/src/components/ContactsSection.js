// ContactsSection.js
import React from 'react';
import './ContactsSection.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import all icons

const ContactsSection = () => {
  return (
    <section id="contacts" className="contacts-section">
      <div className="container">
        <h2>Contacts</h2>
        <div className="section-divider">
          <div className="diamond"></div>
        </div>
        <div className="contacts-container">
          <div className="contact-item">
            <h3>Contact Links</h3>
            <div className="social-icons">
              {/* Email */}
              <a 
                href="mailto:mtshalisenamile@gmail.com" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaEnvelope size={24} />
              </a>
              {/* Phone */}
              <a 
                href="tel:0765377766" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaPhone size={24} />
              </a>
              {/* GitHub */}
              <a 
                href="https://github.com/senamilemtshali" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/senamile-mtshali-549517137" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;