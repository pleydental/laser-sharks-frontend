// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import ZellePage from './pages/ZellePage';
import Zelle from './pages/Zelle';
import GooglePay from './pages/GooglePay';
import AppleCash from './pages/AppleCash';
import './App.css';
import MatchupRecap from './pages/MatchupRecap'; // we’ll keep this but it won’t break styling

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this right after <Router> */}
      <div className="app-container">
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/managers" element={<Managers />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/champ-rules" element={<ChampRules />} />
            <Route path="/champions" element={<Champions />} />
            <Route path="/managers/:slug" element={<ManagerBio />} />
            <Route path="/losers/" element={<Losers />} />
            <Route path="/matchup-recap/:year" element={<MatchupRecap />} />
            <Route path="/zelle" element={<ZellePage />} />
            <Route path="/zelle" element={<Zelle />} />
            <Route path="/googlepay" element={<GooglePay />} />
            <Route path="/applecash" element={<AppleCash />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
