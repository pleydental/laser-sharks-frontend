import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // closes the menu when a link is clicked
  }

  return (
    <nav className="navbar">
      {/* Hamburger + Label */}
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
      
{/* Nav Links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Dashboard</Link>
        <Link to="/standings" onClick={handleLinkClick}>Standings</Link>
        <Link to="/managers" onClick={handleLinkClick}>Managers</Link>
        <Link to="/rules" onClick={handleLinkClick}>League Rules</Link>
        <Link to="/champ-rules" onClick={handleLinkClick}>Champ Rules</Link>
        <Link to="/champions" onClick={handleLinkClick}>Champions</Link>
        <Link to="/losers" onClick={handleLinkClick}>Losers</Link>
      </div>
    </nav>
  );
};

export default Navbar;
