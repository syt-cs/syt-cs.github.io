import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-list">
        <p className="projects-text">Work in Progress 🚧</p>
        <img
          src="/inprogress.jpg"
          alt="Work in progress"
          className="work-in-progress-image"
        />
        <p className="coming-soon-text">Check back soon!</p>
      </div>
    </div>
  );
};

export default Projects;
