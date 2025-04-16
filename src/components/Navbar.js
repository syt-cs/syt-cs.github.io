import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Sean Takahashi</h1>  {/* Change to logo */}
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/CV" className="navbar-link">Resume</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
