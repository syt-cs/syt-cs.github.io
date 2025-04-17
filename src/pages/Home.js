import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const phrases = [
    "is a programmer",
    "is a swimmer",
    "wants to travel to Europe",
    "loves cooking",
    "is Japanese \uD83C\uDDEF\uD83C\uDDF5",
    "loves the outdoors"
  ];

  const [displayText, setDisplayText] = useState("Takahashi");
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const scrollIntervalRef = useRef(null);
  const stopTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);

    // Start scrolling phrases
    scrollIntervalRef.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setDisplayText(phrases[randomIndex]);
    }, 200);

    // Stop after 1.5 seconds and pick one phrase to freeze on
    stopTimeoutRef.current = setTimeout(() => {
      clearInterval(scrollIntervalRef.current);
      const finalIndex = Math.floor(Math.random() * phrases.length);
      setDisplayText(phrases[finalIndex]);
    }, 1500);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    clearInterval(scrollIntervalRef.current);
    clearTimeout(stopTimeoutRef.current);
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
