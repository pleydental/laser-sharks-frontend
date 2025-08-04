// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // or a separate CSS file if you have one for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/standings">Standings</Link>
      <Link to="/managers">Managers</Link>
      <Link to="/rules">League Rules</Link>
      <Link to="/champ-rules">Champ Rules</Link>
      <Link to="/champions">Champions</Link>
      <Link to="/losers" activeclassname="active">Losers</Link>
    </nav>
  );
};

export default Navbar;
