import React from 'react';
import { Link } from 'react-router-dom'; // For back nav, if needed
import './Album.css';


import Image1 from '../assets/lakecole.jpg'; 
import Image2 from '../assets/stars.jpg'; 
import Image3 from '../assets/basketball.jpg'; 
import Image4 from '../assets/nycsunset.jpg'; 
import Image5 from '../assets/northwestern.jpg'; 
import Image6 from '../assets/yankees.jpg';
import Image7 from '../assets/campfire.jpg'; 
import Image8 from '../assets/planenyc.jpg';
import Image9 from '../assets/bean.jpg';
import Image10 from '../assets/beachbarcelona.jpg';
import Image11 from '../assets/chicago.jpg';
import Image12 from '../assets/fireworks.jpg';
import Image13 from '../assets/ferriswheel.jpg';
import Image14 from '../assets/beachkochi.jpg';

const Album = () => {
  const images = [
    { src: Image1, alt: 'Boating at Lake Cole' },
    { src: Image2, alt: 'Stargazing' },
    { src: Image3, alt: 'Basketball in rain' },
    { src: Image4, alt: 'Skyline in Sunset' },
    { src: Image5, alt: 'Northwestern' },
    //{ src: Image6, alt: 'Yankees Game' },
    { src: Image7, alt: 'Campfire' },
    { src: Image8, alt: 'NYC from the sky' },
    { src: Image9, alt: 'The Bean' },
    { src: Image10, alt: 'Beach in Barcelona' },
    { src: Image11, alt: 'Architecture Boat Tour of Chicago' },
    { src: Image12, alt: 'Fireworks at Navy Pier' },
    { src: Image13, alt: 'Ferris Wheel at Navy Pier' },
    { src: Image14, alt: 'Sea in Kochi' },

  ];

  return (
    <div className="album-page">
      <div className="album-header">
        <h1 className="album-title">Album</h1>
        <p className="album-subtitle">Snapshots of life, hobbies, and adventures</p>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
      <div className="album-grid">
        {images.map((image, index) => (
          <div key={index} className="album-item">
            <img src={image.src} alt={image.alt} loading="lazy" />
            <div className="image-overlay">
              <span>{image.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;