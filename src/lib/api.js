// src/lib/api.js
// Use Netlify proxy in prod, dev server locally
const ENV_BASE = (process.env.REACT_APP_AUTH_BASE || "").replace(/\/$/, "");
const PROD_BASE = "/api";                 // Netlify proxy prefix
const DEV_BASE = "http://localhost:4000/api"; // local backend

// If an env var is provided, use it; otherwise default to PROD_BASE in browser, DEV in non-browser
const BASE =
  (typeof window !== "undefined" && (ENV_BASE || PROD_BASE)) ||
  DEV_BASE;

// Optional: quick debug in DevTools
if (typeof window !== "undefined") window.__AUTH_BASE = BASE;

export const api = {
  async login(password, remember) {
    const res = await fetch(`${BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ password, remember }),
    });
    if (!res.ok) throw new Error("login_failed");
    return res.json();
  },

  async me() {
    const res = await fetch(`${BASE}/me`, { credentials: "include" });
    if (!res.ok) throw new Error("me_failed");
    return res.json();
  },

  async logout() {
    const res = await fetch(`${BASE}/logout`, {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) throw new Error("logout_failed");
    return res.json();
  },
};

