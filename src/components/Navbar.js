import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">sean takahashi.</Link>  {/* Your name/logo links to home */}
        <ul className="navbar-links">
          <li><Link to="/about" className="navbar-link">about</Link></li>
          <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="navbar-link">resume</a></li>
          <li><Link to="/projects" className="navbar-link">projects</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
