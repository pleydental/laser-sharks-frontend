// src/AppContent.js
import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Navbar from "./Navbar";
import Login from "./pages/Login";

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

// ---- Route guard ----
function RequireAuth() {
  const { status } = useAuth(); // "checking" | "in" | "out"
  const location = useLocation();
  const devBypass = process.env.REACT_APP_DEV_BYPASS === "1";

  if (devBypass) return <Outlet />;
  if (status === "checking") return null; // or a spinner
  return status === "in"
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
}

// ---- Authed layout (Navbar + scroll + outlet) ----
function AuthedLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const devBypass = process.env.REACT_APP_DEV_BYPASS === "1";

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogout = async () => {
    if (devBypass) {
      localStorage.removeItem("loggedIn");
      sessionStorage.removeItem("loggedIn");
      navigate("/login", { replace: true });
      return;
    }
    try {
      await logout();
    } finally {
      localStorage.removeItem("loggedIn");
      sessionStorage.removeItem("loggedIn");
      navigate("/login", { replace: true });
    }
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <div className="page-content">
        <Outlet />
      </div>
    </>
  );
}

// ---- App routes ----
export default function AppContent() {
  const { status } = useAuth();

  return (
    <Routes>
      {/* Public login route: if already signed in, bounce home */}
      <Route
        path="/login"
        element={status === "in" ? <Navigate to="/" replace /> : <Login />}
      />

      {/* Everything below requires auth */}
      <Route element={<RequireAuth />}>
        <Route element={<AuthedLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="/standings" element={<Standings />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/champ-rules" element={<ChampRules />} />

          {/* Champions page renders its own <Comments/> */}
          <Route path="/champions" element={<Champions />} />

          <Route path="/managers/:slug" element={<ManagerBio />} />
          <Route path="/losers" element={<Losers />} />

          {/* Draft Recaps render their own <Comments/> */}
          <Route path="/draft-recaps" element={<DraftRecaps />} />
          <Route path="/draft-recaps/:year" element={<DraftRecaps />} />

          {/* Weekly pages handle their own comment keying */}
          <Route path="/weekly-matchup-recaps" element={<WeeklyMatchupRecaps />} />
          <Route path="/weekly-matchup-recaps/:year" element={<WeeklyMatchupRecaps />} />
          <Route path="/weekly-matchup-recaps/:year/week/:week" element={<WeeklyMatchupRecaps />} />

          {/* Championship recap pages render their own <Comments/> */}
          <Route path="/matchup-recap/:year" element={<MatchupRecap />} />

          <Route path="/zelle" element={<ZellePage />} />
          <Route path="/googlepay" element={<GooglePay />} />
          <Route path="/applecash" element={<AppleCash />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route
        path="*"
        element={<Navigate to={status === "in" ? "/" : "/login"} replace />}
      />
    </Routes>
  );
}
