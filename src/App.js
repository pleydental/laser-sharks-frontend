// src/App.js
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext";
import ScrollToTop from "./ScrollToTop";
import Login from "./pages/Login";
import "./App.css";

// Lazy load the main app shell
const AppContent = React.lazy(() => import("./AppContent"));

/** Only show the login page when you're logged OUT */
function RequireLoggedOut() {
  const { status } = useAuth();
  if (status === "checking") {
    return <div className="page-content"><p>Loading…</p></div>;
  }
  if (status === "in") {
    // ✅ use React Router navigation instead of window.location.replace
    return <Navigate to="/" replace />;
  }
  return <Login />;
}



/** Only show the main app when you're logged IN */
function RequireLoggedIn({ children }) {
  const { status } = useAuth();

  if (status === "checking") {
    return <div className="page-content"><p>Loading…</p></div>;
  }
  if (status !== "in") {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AppShell() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/login" element={<RequireLoggedOut />} />

        <Route
          path="/*"
          element={
            <RequireLoggedIn>
              <Suspense fallback={<div className="page-content"><p>Loading…</p></div>}>
                <AppContent />
              </Suspense>
            </RequireLoggedIn>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppShell />
      </Router>
    </AuthProvider>
  );
}
