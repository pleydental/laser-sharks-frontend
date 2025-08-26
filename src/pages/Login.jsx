// src/pages/Login.jsx
import React, { useEffect, useState } from "react";    // <- add useEffect
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import pyramid from "../assets/pyramid.png";

export default function Login() {
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  const { login, status } = useAuth();                // <- pull status
  const nav = useNavigate();
  const loc = useLocation();
  const dest = loc.state?.from?.pathname || "/";

  // If user is already authenticated, don't show the login page.
  useEffect(() => {
    if (status === "in") nav(dest, { replace: true }); // or "/" if you prefer
  }, [status, nav, dest]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(password, remember);   // backend login (sets cookie)
      import("../AppContent");           // prefetch
      nav(dest, { replace: true });      // go where the user was headed
    } catch {
      setError("Ah shit, wrong password, time to ask Mish.");
    }
  };

  return (
    <>
      {/* Login-only hero */}
      <div className="login-hero">
        <h2 className="login-league-title">Laser Sharks Fantasy Football League</h2>
        <img src={pyramid} alt="" className="login-pyramid" />
      </div>

      <div className="content-wrapper login-card">
        <h1>
          Blue Pill or Red Pill?
          <br />
          <span style={{ fontWeight: 400 }}>Or Password...</span>
        </h1>

        <form onSubmit={submit} className="login-form">
          <label style={{ display: "block", margin: "0.5rem 0" }}>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "0.6rem", marginTop: 6 }}
              autoFocus
              required
            />
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: 8, margin: "0.5rem 0 1rem" }}>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span>Damn girl, let me stay</span>
          </label>

          {error && <div style={{ color: "salmon", marginBottom: 10 }}>{error}</div>}

          <button type="submit" style={{ padding: "0.5rem 0.9rem", fontWeight: 700 }}>
            Unlock
          </button>
        </form>
      </div>
    </>
  );
}
