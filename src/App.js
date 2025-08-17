// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

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
// import Zelle from './pages/Zelle'; // duplicate path, leaving this out
import GooglePay from './pages/GooglePay';
import AppleCash from './pages/AppleCash';

import './App.css';

function AppContent() {
  const location = useLocation();
  const { logout } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const hideChrome = location.pathname === '/login';

  return (
    <>
      <Navbar onLogout={logout} />
      <div className="page-content">

        <Routes>
          {/* Public route */}
          <Route path="/login" element={<Login />} />

          {/* Protected section */}
          <Route element={<ProtectedRoute />}>
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
          </Route>

          {/* optional: catch-all to login */}
          <Route path="*" element={<Login />} />
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
