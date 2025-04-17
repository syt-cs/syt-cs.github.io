import React from 'react';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <img src="/pfp.jpg" alt="Sean Takahashi" className="profile-image fade-in" />
      <h1 className="fade-in delay-1">Sean Takahashi</h1>
      <div className="about-location fade-in delay-2">
        <FaMapMarkerAlt />
        New York, NY
      </div>
      <div className="social-links fade-in delay-3">
        <a href="https://github.com/Paperdasher" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} color="#3498db" />
        </a>
        <a href="https://linkedin.com/in/seantakahashi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} color="#0077b5" />
        </a>
      </div>
      <p className="fade-in delay-4">
        My name is Sean Takahashi and I'm currently a junior at <a href="https://stuy.enschool.org" target="_blank" rel="noopener noreferrer">Stuyvesant High School</a>. 
        My interests lie in data science and machine learning, and I hope to conduct further research in these fields.  
      </p>
      <p className="fade-in delay-5">
        Contact: seanyuto [at] gmail [dot] com
      </p>
    </div>
  );
};

export default About;