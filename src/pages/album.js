import React, { useState, useEffect } from 'react';
import './Album.css';

import Image1 from '../assets/lakecole.jpg'; 
import Image2 from '../assets/stars.jpg'; 
import Image3 from '../assets/rainbasketball.jpg'; 
import Image4 from '../assets/nycsunset.JPG'; 
import Image5 from '../assets/northwestern.jpg';
//import Image6 from '../assets/yankees.jpg';
import Image7 from '../assets/campfire.jpg'; 
import Image8 from '../assets/planenyc.jpg';
import Image9 from '../assets/bean.jpg';
import Image10 from '../assets/beachbarcelona.jpg';
import Image11 from '../assets/chicago.jpg';
import Image12 from '../assets/fireworks.jpg';
import Image13 from '../assets/ferriswheel.jpg';
import Image14 from '../assets/beachkochi.jpg';

const Album = () => {
  const [images, setImages] = useState([]); // Loaded with metadata
  const [loading, setLoading] = useState(true);

  const imageData = [
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

  // Preload for smooth flow (sizes help with any future tweaks)
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        imageData.map((img) => {
          return new Promise((resolve) => {
            const image = new Image();
            image.src = img.src;
            image.onload = () => {
              resolve({
                ...img,
                naturalWidth: image.naturalWidth,
                naturalHeight: image.naturalHeight,
                aspectRatio: image.naturalWidth / image.naturalHeight,
              });
            };
            image.onerror = () => resolve({ ...img, naturalWidth: 1, naturalHeight: 1, aspectRatio: 1 });
          });
        })
      );
      setImages(loadedImages);
      setLoading(false);
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <div className="album-page">
        <div className="album-header">
          <h1 className="album-title">Album</h1>
          <p className="album-subtitle">Loading snapshots...</p>
        </div>
        <div className="album-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton-item" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="album-page">
      <div className="album-header">
        <h1 className="album-title">Album</h1>
        <p className="album-subtitle">Snapshots of life, hobbies, and adventures</p>
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