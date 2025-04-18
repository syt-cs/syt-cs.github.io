import React from 'react';
import './Projects.css';
import inprogress from '../assets/inprogress.jpg';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-list">
        <p className="projects-text">Work in Progress 🚧</p>
        <div className="work-in-progress-image">
            <img src={inprogress} alt="construction" />
        </div>
        <p className="coming-soon-text">Check back soon!</p>
      </div>
    </div>
  );
};

export default Projects;
