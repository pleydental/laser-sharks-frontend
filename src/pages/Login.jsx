// src/pages/Login.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import ResponsivePicture from "../components/ResponsivePicture";
import pyramidPng from "../assets/pyramid.png"; // PNG fallback for <picture>

import pyramidWebp800 from "../assets/pyramid-800.webp";
import pyramidWebp1600 from "../assets/pyramid-1600.webp";

import bgSharkWebp2560 from "../assets/bg-shark-2560.webp";
import bgSharkPng from "../assets/bg-shark.png";
import bgSharkWebp from "../assets/bg-shark-1600.webp";


function SharkHeroCircle() {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${bgSharkWebp} 1600w, ${bgSharkWebp2560} 2560w`}
        sizes="(max-width: 480px) 160px, (max-width: 768px) 200px, 220px"
      />
      <img
        src={bgSharkPng}               // PNG fallback (only used if no WebP)
        alt="Laser Shark"
        width={220}
        height={220}
        loading="lazy"
        decoding="async"
        style={{ borderRadius: "50%" }}
      />
    </picture>
  );
}




export default function Login() {
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  const { login, status } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();
  const dest = loc.state?.from?.pathname || "/";

  // If user is already authenticated, don't show the login page.
  useEffect(() => {
    if (status === "in") nav(dest, { replace: true });
  }, [status, nav, dest]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(password, remember);       // backend login (sets cookie/session)
     // --- storage persistence: local if remember, else session ---
try {
  // clear any stale flags first
  localStorage.removeItem("loggedIn");
  sessionStorage.removeItem("loggedIn");
  localStorage.removeItem("ls_storage");
  sessionStorage.removeItem("ls_storage");

  if (remember) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("ls_storage", "local");
    localStorage.setItem("ls_login_ts", String(Date.now()));
  } else {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("ls_storage", "session");
    sessionStorage.setItem("ls_login_ts", String(Date.now()));
  }
} catch (e) {
  // noop: storage may be blocked, but cookie session still works
}


      // Optional: lightweight "remember me" cookie (helps Safari/ITP)
      if (remember) {
        document.cookie = "ls_remember=1; path=/; max-age=1209600"; // 14 days
      }

      // Prefetch app shell and go
      import("../AppContent");
      nav(dest, { replace: true });
    } catch {
      setError("Ah shit, wrong password, time to ask Mish.");
    }
  };

  return (
    // NEW — uses your imported WebP + PNG fallback
<div
  className="login-bg"
  style={{
    // 🔒 Force WebP directly so the browser *must* request it
    backgroundImage: `url(${bgSharkWebp2560})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh"
  }}
>

      {/* Login-only hero */}
      <div className="login-hero">
        <h2 className="login-league-title">Laser Sharks Fantasy Football League</h2>

<ResponsivePicture
  srcSetWebp={`${pyramidWebp800} 800w, ${pyramidWebp1600} 1600w`}
  srcPng={pyramidPng}
  alt="Laser Sharks pyramid"
  className="pyramid-img"
  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 480px, 560px"
  width={800}
  height={800}
/>

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
            <span>Baby It's Cold Outside, let me stay</span>
          </label>

          {error && <div style={{ color: "salmon", marginBottom: 10 }}>{error}</div>}

          <button type="submit" style={{ padding: "0.5rem 0.9rem", fontWeight: 700 }}>
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}
export { SharkHeroCircle };