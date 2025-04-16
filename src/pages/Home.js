import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Sean Takahashi</h1>
      <p>
        My name is Sean Takahashi and I'm currently a junior at <a href="https://stuy.enschool.org" target="_blank" rel="noopener noreferrer">Stuyvesant High School</a>. My interests lie in using ethical data collection and using Machine Learning to optimize user services.  
      </p>
      <p>
        Check out my <a href="/CV">resume</a>, view my projects, or connect with me below!
      </p>
      <div className="social-links">
        <a href="https://github.com/syt-cs" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://linkedin.com/in/____" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
        <a href="seanyuto@gmail.com"> Email</a>
      </div>
    </div>
  );
};

export default Home;
