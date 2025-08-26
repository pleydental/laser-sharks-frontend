// src/AppContent.js
import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Navbar from "./Navbar";

import Dashboard from "./pages/Dashboard";
import Standings from "./pages/Standings";
import Managers from "./pages/Managers";
import Rules from "./pages/Rules";
import ChampRules from "./pages/ChampRules";
import Champions from "./pages/Champions";
import ManagerBio from "./pages/ManagerBio";
import Losers from "./pages/Losers";
import DraftRecaps from "./pages/DraftRecaps";
import MatchupRecap from "./pages/MatchupRecap";
import WeeklyMatchupRecaps from "./pages/WeeklyMatchupRecaps";
import ZellePage from "./pages/ZellePage";
import GooglePay from "./pages/GooglePay";
import AppleCash from "./pages/AppleCash";

function AuthedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const { status, logout } = useAuth(); // "checking" | "in" | "out"

  // DEV BYPASS (local only via .env.development)
  const devBypass = process.env.REACT_APP_DEV_BYPASS === "1";
  const effectiveStatus = devBypass ? "in" : status;

  const handleLogout = async () => {
    if (devBypass) {
      localStorage.removeItem("loggedIn");
      sessionStorage.removeItem("loggedIn");
      navigate("/login", { replace: true });
      return;
    }
    try {
      await logout(); // clears cookie on backend
    } finally {
      localStorage.removeItem("loggedIn");
      sessionStorage.removeItem("loggedIn");
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Only show loader while the real auth is checking AND we're not bypassing
  if (!devBypass && status === "checking") {
    return <div className="page-content"><p>Loading…</p></div>;
  }

  // Gate: if not logged in, redirect to /login
  if (effectiveStatus === "out" && location.pathname !== "/login") {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return (
    <>
      {effectiveStatus === "in" && <Navbar onLogout={handleLogout} />}
      <div className="page-content">
        <Routes>
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

          {/* Fallback (inside authed area) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default AuthedRoutes;
