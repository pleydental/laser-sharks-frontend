// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { status } = useAuth();
  const location = useLocation();

  // While we don't know yet, render nothing (or a tiny splash) — NO redirect
  if (status === "checking") return null;

  if (status !== "in") {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}
