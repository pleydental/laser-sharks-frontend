// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';

import { AuthProvider, useAuth } from './context/AuthContext';

import Login from './pages/Login';
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
import DraftRecaps from './pages/DraftRecaps';
import MatchupRecap from './pages/MatchupRecap';
import WeeklyMatchupRecaps from './pages/WeeklyMatchupRecaps';
import ZellePage from './pages/ZellePage';
import GooglePay from './pages/GooglePay';
import AppleCash from './pages/AppleCash';

import './App.css';

function AppContent() {
  const location = useLocation();
  const { status, logout } = useAuth(); // "checking" | "in" | "out"
  const navigate = useNavigate();

  // --- DEV BYPASS (local only via .env.development) ---
  // If REACT_APP_DEV_BYPASS=1, we force "in" locally without touching backend.
  const devBypass = process.env.REACT_APP_DEV_BYPASS === '1';
  const effectiveStatus = devBypass ? 'in' : status;

  const handleLogout = async () => {
    if (devBypass) {
      // Local-only "logout" when bypassing (no backend needed)
      localStorage.removeItem('loggedIn');
      sessionStorage.removeItem('loggedIn');
      navigate('/login', { replace: true });
      return;
    }
    try {
      await logout(); // clears cookie on backend
    } finally {
      localStorage.removeItem('loggedIn');
      sessionStorage.removeItem('loggedIn');
      navigate('/login', { replace: true });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Only show loader while the real auth is checking AND we're not bypassing
  if (!devBypass && status === 'checking') {
    return <div className="page-content"><p>Loading…</p></div>;
  }

  // Gate: if not logged in (effectiveStatus === 'out'), redirect to /login
  if (effectiveStatus === 'out' && location.pathname !== '/login') {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return (
    <>
      {effectiveStatus === 'in' && <Navbar onLogout={handleLogout} />}
      <div className="page-content">
        <Routes>
          {/* Public */}
          <Route path="/login" element={<Login />} />

          {/* Authed pages */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/champ-rules" element={<ChampRules />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/managers/:slug" element={<ManagerBio />} />
          <Route path="/losers" element={<Losers />} />
          <Route path="/draft-recaps" element={<DraftRecaps />} />
          <Route path="/draft-recaps/:year" element={<DraftRecaps />} />
          <Route path="/weekly-matchup-recaps" element={<WeeklyMatchupRecaps />} />
          <Route path="/weekly-matchup-recaps/:year" element={<WeeklyMatchupRecaps />} />
          <Route path="/weekly-matchup-recaps/:year/week/:week" element={<WeeklyMatchupRecaps />} />
          <Route path="/matchup-recap/:year" element={<MatchupRecap />} />
          <Route path="/zelle" element={<ZellePage />} />
          <Route path="/googlepay" element={<GooglePay />} />
          <Route path="/applecash" element={<AppleCash />} />

          {/* Fallback */}
          <Route path="*" element={
            <Navigate to={effectiveStatus === 'in' ? '/' : '/login'} replace />
          } />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <AppContent />
        </div>
      </Router>
    </AuthProvider>
  );
}
