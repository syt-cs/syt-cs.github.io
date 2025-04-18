import React, { useState, useRef, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const texts = [
    "Takahashi",
    "is a programmer",
    "wants to travel to Europe",
    "loves cooking",
    "is a swimmer",
    "is Japanese",
    "enjoys the outdoors",
    "is learning the ukelele",
    "is a karateka",
    "needs to hit the gym"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const animationTimeout = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemHeightRef = useRef(null); // Ref to store the calculated item height

  useEffect(() => {
    // Calculate item height after the component has rendered and containerRef is available
    if (containerRef.current && texts.length > 0) {
      itemHeightRef.current = containerRef.current.clientHeight / texts.length;
      console.log('Initial itemHeight calculated:', itemHeightRef.current);
    }
  }, [texts.length]); // Recalculate if the number of texts changes (unlikely here)

  const scrollToIndex = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const itemHeight = itemHeightRef.current;
    const scrollContainer = containerRef.current;

    console.log(`Scrolling to index: ${index}, itemHeight: ${itemHeight}`);

    if (!scrollContainer || typeof itemHeight !== 'number') {
      console.error('Scroll container or item height not available.');
      setIsAnimating(false);
      return;
    }

    const targetY = index * itemHeight;
    scrollContainer.style.transition = 'transform 0.8s ease-in-out';
    scrollContainer.style.transform = `translateY(-${targetY}px)`;

    clearTimeout(animationTimeout.current);
    animationTimeout.current = setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
      console.log('Scroll animation finished, currentIndex:', currentIndex);
    }, 800);
  };

  const handleMouseEnter = () => {
    if (isAnimating) return;
    const randomIndex = Math.floor(Math.random() * (texts.length - 1)) + 1;
    scrollToIndex(randomIndex);
  };

  const handleMouseLeave = () => {
    scrollToIndex(0);
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