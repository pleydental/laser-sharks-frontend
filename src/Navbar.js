// src/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

const handleLogout = () => {
  localStorage.removeItem('loggedIn');
  sessionStorage.removeItem('loggedIn');
  setMenuOpen(false);
  onLogout(); // <-- THIS FIXES YOUR ERROR
  navigate('/login');
};

  return (
    <nav className="navbar">
      <div
        className="hamburger-container"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="hamburger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <span className="menu-label">MENU</span>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Dashboard</Link>
        <Link to="/standings" onClick={handleLinkClick}>Standings</Link>
        <Link to="/managers" onClick={handleLinkClick}>Managers</Link>
        <Link to="/rules" onClick={handleLinkClick}>League Rules</Link>
        <Link to="/champ-rules" onClick={handleLinkClick}>Champ Rules</Link>
        <Link to="/champions" onClick={handleLinkClick}>Champions</Link>
        <Link to="/losers" onClick={handleLinkClick}>Losers</Link>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
