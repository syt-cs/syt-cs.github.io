import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const texts = [
    "is a programmer",
    "is a swimmer",
    "wants to travel to Europe",
    "loves cooking",
    "is Japanese",
    "loves the outdoors"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500); // Change every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRandomScroll = () => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    setTextIndex(randomIndex);
    document.getElementById(`phrase-${randomIndex}`).scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateToAbout = () => {
    navigate('/about');
  };

  return (
    <div className="home-container">
      <h1 className="home-title">
        Sean{' '}
        <span
          className="hover-takahashi"
          onMouseEnter={handleRandomScroll}
        >
          Takahashi
        </span>
      </h1>
      <p className="home-subtitle">Sean {texts[textIndex]}</p>
      <button className="random-button" onClick={handleNavigateToAbout}>
        I'm Feeling Lucky
      </button>
      <div className="phrases-container">
        {texts.map((text, index) => (
          <div key={index} id={`phrase-${index}`} className="phrase">
            Sean {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;