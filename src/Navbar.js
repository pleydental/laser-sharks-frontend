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
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/standings" onClick={handleLinkClick}>Standings</Link>
        <Link to="/managers" onClick={handleLinkClick}>Mopes</Link>
        <Link to="/rules" onClick={handleLinkClick}>LS Rules</Link>
        <Link to="/champ-rules" onClick={handleLinkClick}>Champ Rules</Link>
        <Link to="/champions" onClick={handleLinkClick}>Champs</Link>
        <Link to="/losers" onClick={handleLinkClick}>Losers</Link>
        <Link to="/draft-recaps" onClick={handleLinkClick}>Draft Recaps</Link>
        <Link to="/weekly-matchup-recaps" onClick={handleLinkClick}>Weekly Recaps</Link>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
