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
import MatchupRecap from './pages/MatchupRecap';
import ZellePage from './pages/ZellePage';
import GooglePay from './pages/GooglePay';
import AppleCash from './pages/AppleCash';

import './App.css';

function AppContent() {
  const location = useLocation();
  const { status, logout } = useAuth(); // "checking" | "in" | "out"
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); // clears cookie on backend
    } finally {
      // clear any legacy flags just in case
      localStorage.removeItem('loggedIn');
      sessionStorage.removeItem('loggedIn');
      navigate('/login', { replace: true });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // while we ask the backend if the cookie is valid
  if (status === 'checking') {
    return <div className="page-content"><p>Loading…</p></div>;
  }

  // if not logged in, push to /login except when already there
  if (status === 'out' && location.pathname !== '/login') {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return (
    <>
      {status === 'in' && <Navbar onLogout={handleLogout} />}
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
          <Route path="/matchup-recap/:year" element={<MatchupRecap />} />
          <Route path="/zelle" element={<ZellePage />} />
          <Route path="/googlepay" element={<GooglePay />} />
          <Route path="/applecash" element={<AppleCash />} />

          {/* Fallback */}
          <Route path="*" element={
            <Navigate to={status === 'in' ? '/' : '/login'} replace />
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
