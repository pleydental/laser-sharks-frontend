// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './Login';
import ScrollToTop from './ScrollToTop';
import Navbar from './Navbar';
import Dashboard from './pages/Dashboard';
import Standings from './pages/Standings';
import Managers from './pages/Managers';
import Rules from './pages/Rules';
import ChampRules from './pages/ChampRules';
import Champions from './pages/Champions';
import ManagerBio from './pages/ManagerBio';
import Losers from './pages/Losers';
import MatchupRecap from './pages/MatchupRecap';
import ZellePage from './pages/ZellePage';
import Zelle from './pages/Zelle';
import GooglePay from './pages/GooglePay';
import AppleCash from './pages/AppleCash';
import './App.css';

function AppContent() {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return (
      localStorage.getItem('loggedIn') === 'true' ||
      sessionStorage.getItem('loggedIn') === 'true'
    );
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!isLoggedIn && location.pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar onLogout={() => setIsLoggedIn(false)} />
      <div className="page-content">
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/champ-rules" element={<ChampRules />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/managers/:slug" element={<ManagerBio />} />
          <Route path="/losers" element={<Losers />} />
          <Route path="/matchup-recap/:year" element={<MatchupRecap />} />
          <Route path="/zelle" element={<ZellePage />} />
          <Route path="/zelle" element={<Zelle />} />
          <Route path="/googlepay" element={<GooglePay />} />
          <Route path="/applecash" element={<AppleCash />} />
        </Routes>
      </div>
    </>
  );
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <AppContent />
      </div>
    </Router>
  );
};

export default App;
