import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const phrases = [
    "is a programmer",
    "is a swimmer",
    "wants to travel to Europe",
    "loves cooking",
    "is Japanese",
    "loves the outdoors"
  ];

  const [displayText, setDisplayText] = useState("Takahashi");
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovering(true);
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setDisplayText(phrases[randomIndex]);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setDisplayText("Takahashi");
  };

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div className="home-container">
      <div className="text-block">
        <div className="line-sean">Sean</div>
        <div
          className="line-takahashi"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {displayText}
        </div>
      </div>
    </div>
  );
};

export default Home;
