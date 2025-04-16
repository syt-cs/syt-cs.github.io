import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">SYT</Link>  {/* Your name/logo links to home */}
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/CV" className="navbar-link">Resume</Link></li>
          <li><Link to="/projects" className="navbar-link">Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
