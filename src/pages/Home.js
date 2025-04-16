import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Sean Takahashi</h1>
      <p>
        My name is Sean Takahashi and I'm currently a junior at <a href="https://stuy.enschool.org" target="_blank" rel="noopener noreferrer">Stuyvesant High School</a>. 
        My interests lie in using ethical data collection and using machine learning to optimize user services.  
      </p>
      <p>
        Check out my <a href="/CV">resume</a>, view my projects, or connect with me below!
      </p>
      <div className="social-links">
        <a href="https://github.com/syt-cs" target="_blank" rel="noopener noreferrer">
        <FaGithub size={40} color="#3498db" />
        </a>
        <a href="https://linkedin.com/in/seantakahashi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} color="#0077b5" />
        </a>
      </div>
    </div>
  );
};

export default Home;
