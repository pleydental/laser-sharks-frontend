// src/pages/Login.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import ResponsivePicture from "../components/ResponsivePicture";
import pyramidPng from "../assets/pyramid.png";
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
        src={bgSharkPng}
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

  const { login } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();
  const dest = loc.state?.from?.pathname || "/";

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(password, remember);

      // persistence (optional – keep as you had it)
      try {
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
      } catch {}

      if (remember) {
        document.cookie = "ls_remember=1; path=/; max-age=1209600";
      }

      // Single navigation — no setTimeout, no hard replace
      nav(dest, { replace: true });
    } catch {
      setError("Ah shit, wrong password, time to ask Mish.");
    }
  };

  return (
    <div
      className="login-bg"
      style={{
        backgroundImage: `url(${bgSharkWebp2560})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="login-hero">
        <h2 className="login-league-title">Laser Sharks Fantasy Football League</h2>
           <br />
           Established 2016 in Mish's Basement
        
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
          Come On In
          <br />
          <span style={{ fontWeight: 400 }}>Get Roasted</span>
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
            <span>I'm old, I have all-timers, or dementia,I can't remember this basic AF password, keep me logged in please</span>
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
