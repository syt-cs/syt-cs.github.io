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
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 1500); // Change every 1.5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    const randomIndex = Math.floor(Math.random() * texts.length);
    setTextIndex(randomIndex);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleNavigateToAbout = () => {
    navigate('/about');
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Sean</h1>
      <div
        className="hover-takahashi"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleNavigateToAbout}
      >
        Takahashi
      </div>
    </div>
  );
};

export default Home;