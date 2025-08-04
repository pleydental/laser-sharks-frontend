// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import './App.css';
import MatchupRecap from './pages/MatchupRecap'; // we’ll keep this but it won’t break styling

function App() {
  return (
    <Router>
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
