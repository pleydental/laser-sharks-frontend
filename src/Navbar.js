import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // create this file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Dashboard</Link>
        <Link to="/standings">Standings</Link>
        <Link to="/managers">Managers</Link>
        <Link to="/rules">League Rules</Link>
        <Link to="/champ-rules">Champ Rules</Link>
        <Link to="/champions">Champions</Link>
        <Link to="/losers">Losers</Link>
      </div>
    </nav>
  );
};

export default Navbar;
