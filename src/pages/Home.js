import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import EuropeImage from '../assets/barcelona.jpg'; 
import CookingImage from '../assets/paella.gif'; 
import SwimmerImage from '../assets/swimming.jpg';
import PoolImage from '../assets/pool.PNG';
import JapaneseImage from '../assets/hakama.jpg';
import OutdoorsImage from '../assets/camp.jpg';
import SkiImage from '../assets/ski.jpg';
import NBAImage from '../assets/baseball.jpg';

const Home = () => {
  const texts = [
    "Takahashi",
    "is a programmer",
    "wants to travel to Europe",
    "loves cooking",
    "is a swimmer",
    "is Japanese",
    "enjoys the outdoors",
    "is learning the ukulele",
    "goes skiing",
    "likes watching sports"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const animationTimeout = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemHeightRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && texts.length > 0) {
      itemHeightRef.current = containerRef.current.clientHeight / texts.length;
    }
  }, [texts.length]);

  const scrollToIndex = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const itemHeight = itemHeightRef.current;
    const scrollContainer = containerRef.current;

    if (!scrollContainer || typeof itemHeight !== 'number') {
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

  const handleNavigateToAbout = (index) => {
    if (index > 0) {
      const sectionId = `section-${index}`;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (index === 1) {
        window.open("https://github.com/Paperdasher", "_blank");
      } else if (index === 7) {
        window.open("https://tabs.ultimate-guitar.com/tab/train/hey-soul-sister-ukulele-1331391", "_blank");
      }
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
            onClick={() => handleNavigateToAbout(currentIndex)}
          >
            <div className="scroll-container" style={{ height: '7vw', overflow: 'hidden' }}>
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

      <div className="image-text-gallery">
        <div id="section-2" className="image-text-section left">
          <div className="image-wrapper">
            <img src={EuropeImage} alt="barcelona" />
          </div>
          <div className="text-wrapper">
            <h3>Barcelona</h3>
            <p>I visited Barcelona in Summer 2022. As a Spanish student I thought that I could apply some of what I've learned in the classroom, but quickly realized they speak Catalan as their main language.
              Guess I should have done my research first! I loved visiting Gaudi's architecture and his museum, but the food was the best part. I would love to go back someday.
            </p>
          </div>
        </div>

        <div id="section-3" className="image-text-section right">
          <div className="image-wrapper">
            <img src={CookingImage} alt="cooking" />
          </div>
          <div className="text-wrapper">
            <h3>Cooking</h3>
            <p>I like cooking different cuisines and trying out new recipes. My best dish is paella and Japanese curry, both using our Le Creuset pots. I'd like to try out making ramen and bagels from scratch for my next challenges!</p>
          </div>
        </div>

        <div id="section-4" className="image-text-section left">
          <div className="image-wrapper">
            <img src={SwimmerImage} alt="swimmer" />
          </div>
          <div className="image-wrapper">
            <img src={PoolImage} alt="pool" />
          </div>
          <div className="text-wrapper">
            <h3>Swimming</h3>
            <p>I've swam since I was four, but started competitively swimming since freshman year of high school. I'm a breaststroker and mainly enjoy the 100/200 breaststroke and the 200/500 freestyle.</p>
            <a href="#section-4" className="section-link">Swimming</a>
          </div>
        </div>

        <div id="section-5" className="image-text-section left">
        <div className="image-wrapper">
            <img src={JapaneseImage} alt="hakama" />
          </div>
          <div className="text-wrapper">
            <h3>Japanese</h3>
            <p>Being Japanese is an important part of my identity, and its shaped who I am today. 
              This is a traditional <a href="https://en.wikipedia.org/wiki/Hakama" target="_blank" rel="noopener noreferrer">"hakama"</a> that I wore for my Saturday school graduation.
            </p>
          </div>
        </div>

        <div id="section-6" className="image-text-section right">
          <div className="image-wrapper">
            <img src={OutdoorsImage} alt="Frost Valley" />
          </div>
          <div className="text-wrapper">
            <h3>Outdoors</h3>
            <p>I like being immersed and taking pictures of nature.</p>
          </div>
        </div>

        <div id="section-8" className="image-text-section left">
          <div className="image-wrapper">
            <img src={SkiImage} alt="ski" />
          </div>
          <div className="text-wrapper">
            <h3>Ski</h3>
            <p>I've enjoyed skiing for a while now, I picked it up fast and I try to get a couple days of runs every year. I'd like to start learning snowboarding as well!</p>
            <a href="#section-8" className="section-link">Skiing</a>
          </div>
        </div>

        <div id="section-9" className="image-text-section right">
        <div className="image-wrapper">
            <img src={NBAImage} alt="MLB game" />
          </div>
          <div className="text-wrapper">
            <h3>Basketball</h3>
            <p>I like watching basketball and baseball. My favorite NBA players are KD, JB, and Cam Thomas. 
              My favorite baseball players are <a href="https://www.youtube.com/watch?v=jblL-wh4YmY&ab_channel=MLB" target="_blank" rel="noopener noreferrer" className="external-link">Aaron Judge</a>, Anthony Volpe, and Yu Darvish. I hope to witness a championship game and attend the parade for both sports.
              FYI: I'm a Yankees fan, not a Mets fan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;