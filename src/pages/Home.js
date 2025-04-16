import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Sean Takahashi</h1>
      <div className="social-links">
        <a href="https://github.com/syt-cs" target="_blank" rel="noopener noreferrer">
        <FaGithub size={40} color="#3498db" />
        </a>
        <a href="https://linkedin.com/in/seantakahashi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} color="#0077b5" />
        </a>
      </div>
      <p>
        My name is Sean Takahashi and I'm currently a junior at <a href="https://stuy.enschool.org" target="_blank" rel="noopener noreferrer">Stuyvesant High School</a>. 
        My interests lie in using ethical data collection and machine learning to optimize user services.  
      </p>
      <p>
        Check out my <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>, view my recent projects on GitHub, or connect with me on LinkedIn. 
      </p>

    </div>
  );
};

export default Home;
