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

  const [targetIndex, setTargetIndex] = useState(0);
  const [animatedIndex, setAnimatedIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let animationFrame;
    let start;
    const duration = 600; // uniform duration in ms
    const distance = targetIndex - animatedIndex;

    if (distance !== 0) {
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        setAnimatedIndex(animatedIndex + distance * easedProgress);
        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setAnimatedIndex(targetIndex);
        }
      };
      animationFrame = requestAnimationFrame(step);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [targetIndex]);

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const handleMouseEnter = () => {
    let newIndex = Math.floor(Math.random() * texts.length);
    while (newIndex === targetIndex) {
      newIndex = Math.floor(Math.random() * texts.length);
    }
    setTargetIndex(newIndex);
  };

  const handleMouseLeave = () => {
    setTargetIndex(0); // Always go back to “Takahashi”
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
              style={{ transform: `translateY(-${animatedIndex * 100}%)` }}
            >
              {texts.map((text, i) => (
                <div className="scroll-item" key={i}>
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
