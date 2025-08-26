// src/App.js
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./ScrollToTop";

import Login from "./pages/Login";
import "./App.css";

// Lazy load everything after login
const AppContent = React.lazy(() => import("./AppContent"));

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <Suspense fallback={<div className="page-content"><p>Loading…</p></div>}>
                  <AppContent />
                </Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
