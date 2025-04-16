// src/pages/CV.js
import React from 'react';

const CV = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>CV</h1>
      <p>If the resume doesn’t show, <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">click here to download it</a>.</p>
      <iframe
        src="/resume.pdf"
        title="Resume"
        width="80%"
        height="800px"
        style={{ border: '1px solid #ccc', marginTop: '2rem' }}
      />
    </div>
  );
};

export default CV;
