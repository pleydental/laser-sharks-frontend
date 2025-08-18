// src/lib/api.js

// Same-origin in prod (Netlify) via proxy; override with ENV in dev if needed.
const PROD_BASE = ""; // empty = same-origin (so requests go to /api/* on the frontend host)
const ENV_BASE = (process.env.REACT_APP_AUTH_BASE || "").replace(/\/$/, "");
const BASE =
  (typeof window !== "undefined" && ENV_BASE) || // e.g., http://localhost:4000 for local testing
  (typeof window !== "undefined" && PROD_BASE) || // same-origin in prod
  "http://localhost:4000"; // server fallback for non-browser contexts

// Optional: quick debug in DevTools
if (typeof window !== "undefined") window.__AUTH_BASE = BASE;

export const api = {
  async login(password, remember) {
    const res = await fetch(`${BASE}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // include cookies
      body: JSON.stringify({ password, remember }),
    });
    if (!res.ok) throw new Error("login_failed");
    return res.json();
  },

  async me() {
    const res = await fetch(`${BASE}/api/me`, {
      credentials: "include",
    });
    if (!res.ok) throw new Error("unauthorized");
    return res.json();
  },

  async logout() {
    const res = await fetch(`${BASE}/api/logout`, {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) throw new Error("logout_failed");
    return res.json();
  },
};
