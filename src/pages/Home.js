import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const phrases = [
  "is a programmer",
  "is a swimmer",
  "wants to travel to Europe",
  "loves cooking",
  "is Japanese 🇯🇵",
  "loves the outdoors"
];

const Home = () => {
  const [currentPhrase, setCurrentPhrase] = useState("Takahashi");
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const stopTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setIsScrolling(true);

    // Start animation
    scrollRef.current.style.transition = 'transform 1.5s ease-in-out';

    // Create a long list of phrases to simulate scroll effect
    const longList = Array.from({ length: 20 }, () =>
      phrases[Math.floor(Math.random() * phrases.length)]
    );

    // Append final phrase at the end
    const finalPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    longList.push(finalPhrase);

    setCurrentPhrase(longList);

    // Scroll animation
    const itemHeight = 96; // 6rem = 96px
    scrollRef.current.style.transform = `translateY(-${itemHeight * (longList.length - 1)}px)`;

    // Stop scroll after 1.5s and freeze
    stopTimeoutRef.current = setTimeout(() => {
      setCurrentPhrase(finalPhrase);
      setIsScrolling(false);
    }, 1500);
  };

  const handleMouseLeave = () => {
    clearTimeout(stopTimeoutRef.current);
    setIsScrolling(false);
    scrollRef.current.style.transition = 'none';
    scrollRef.current.style.transform = 'translateY(0)';
    setCurrentPhrase("Takahashi");
  };

  const handleClick = () => {
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
