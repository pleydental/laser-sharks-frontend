// src/Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";   // ✅ use context logout
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();                    // ✅ from context

  const handleLinkClick = () => setMenuOpen(false);

  const clearAllClientFlags = () => {
    // nuke ALL auth flags
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("ls_storage");
    localStorage.removeItem("ls_login_ts");
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("ls_storage");
    sessionStorage.removeItem("ls_login_ts");
    // expire remember cookie
    document.cookie = "ls_remember=; path=/; max-age=0";
  };

  const handleLogout = async () => {
    try {
      // 1) Server-side: clear ls_session cookie
      await logout();                              // calls /api/logout via api.js
      // 2) Client-side: clear local/session flags + tiny cookie
      clearAllClientFlags();
    } catch {
      // If server unavailable, still force local sign-out
      clearAllClientFlags();
    } finally {
      setMenuOpen(false);
      navigate("/login", { replace: true });
    }
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

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
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
}
