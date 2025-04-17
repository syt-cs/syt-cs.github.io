import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const texts = [
    "Takahashi",
    "is a programmer",
    "is a swimmer",
    "wants to travel to Europe",
    "loves cooking",
    "is Japanese 🇯🇵",
    "loves the outdoors"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (isHovering) {
      const randomIndex = Math.floor(Math.random() * (texts.length - 1)) + 1; // skip index 0
      const steps = randomIndex;
      let currentStep = 0;

      interval = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % texts.length);
        currentStep++;
        if (currentStep === steps) {
          clearInterval(interval);
        }
      }, 150);
    } else {
      setTextIndex(0); // Reset to "Takahashi"
    }

    return () => clearInterval(interval);
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleNavigateToAbout = () => {
    navigate('/about');
  };

  return (
    <div className="home-container">
      <div className="intro-container">
        <h1 className="line-sean">Sean</h1>
        <div
          className="line-takahashi"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleNavigateToAbout}
        >
          <div className="scroll-container">
            <div
              className="scrolling-text"
              style={{ transform: `translateY(-${textIndex * 100}%)` }}
            >
              {texts.map((text, index) => (
                <div className="scroll-item" key={index}>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
