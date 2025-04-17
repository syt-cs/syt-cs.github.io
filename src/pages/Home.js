import React, { useState, useRef } from 'react';
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhrase, setSelectedPhrase] = useState("Takahashi");
  const containerRef = useRef(null);

  const [isAnimating, setIsAnimating] = useState(false); // throttle animation

  const scrollToIndex = (index) => {
    if (isAnimating) return; // prevent stacking animations
    setIsAnimating(true);
  
    const itemHeight = containerRef.current?.clientHeight || 40;
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;
  
    const targetY = index * itemHeight;
    scrollContainer.style.transition = 'transform 0.8s ease-in-out';
    scrollContainer.style.transform = `translateY(-${targetY}px)`;
  
    setTimeout(() => {
      setCurrentIndex(index);
      setSelectedPhrase(texts[index]);
      setIsAnimating(false);
    }, 800); // match transition duration
  };
  
  const handleMouseEnter = () => {
    if (isAnimating) return; // don't do anything if animating
  
    let randomIndex = Math.floor(Math.random() * texts.length);
    while (randomIndex === 0) {
      randomIndex = Math.floor(Math.random() * texts.length);
    }
    scrollToIndex(randomIndex);
  };
  

  const handleMouseLeave = () => {
    scrollToIndex(0); // Back to “Takahashi”
  };

  const handleNavigateToAbout = () => {
    if (currentIndex !== 0) {
      const sectionId = `section-${currentIndex}`;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getImageSrc = (phrase) => {
    const keyword = phrase
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .split(' ')
      .pop();

    try {
      return require(`../assets/${keyword}.png`);
    } catch {
      return require(`../assets/inprogress.jpg`);
    }
  };

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="intro-container">
          <h1 className="line-sean">Sean</h1>
          <div
            className="line-takahashi"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleNavigateToAbout}
          >
            <div className="scroll-container" style={{ height: '6vw', overflow: 'hidden' }}>
              <div className="scrolling-text" ref={containerRef}>
                {texts.map((text, i) => (
                  <div
                    className="scroll-item"
                    key={i}
                    style={{ height: '6vw', lineHeight: '6vw' }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image sections */}
      <div className="image-gallery">
        {texts.slice(1).map((phrase, index) => (
          <div key={index} id={`section-${index + 1}`} className="image-section">
            <img src={getImageSrc(phrase)} alt={phrase} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
