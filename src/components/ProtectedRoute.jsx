import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { status } = useAuth();
  const loc = useLocation();

  if (status === "checking") {
    return <div className="content-wrapper">Checking access…</div>;
  }
  if (status === "out") {
    return <Navigate to="/login" replace state={{ from: loc }} />;
  }
  return <Outlet />;
}
