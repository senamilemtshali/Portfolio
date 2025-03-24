// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="nav-link"
          >
            About me
          </Link>
        </li>
        <li>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            className="nav-link"
          >
            My skills
          </Link>
        </li>
        <li>
          <Link 
            to="portfolio" 
            smooth={true} 
            duration={500} 
            className="nav-link"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link 
            to="contacts" 
            smooth={true} 
            duration={500} 
            className="nav-link"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;