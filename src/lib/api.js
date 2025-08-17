// src/lib/api.js
// Robust BASE resolver: prod -> Render; dev -> localhost
const PROD_BASE = "https://laser-sharks-auth.onrender.com";
const ENV_BASE = (process.env.REACT_APP_AUTH_BASE || "").replace(/\/$/, "");
const BASE =
  (typeof window !== "undefined" && ENV_BASE) ||
  (typeof window !== "undefined" && PROD_BASE) || // safety for static hosts
  "http://localhost:4000";

// Optional: quick debug in DevTools
if (typeof window !== "undefined") window.__AUTH_BASE = BASE;

export const api = {
  async login(password, remember) {
    const res = await fetch(`${BASE}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // bring back/set cookie
      body: JSON.stringify({ password, remember }),
    });
    if (!res.ok) throw new Error("login_failed");
    return res.json();
  },

  async me() {
    const res = await fetch(`${BASE}/api/me`, {
      credentials: "include",
    });
    if (!res.ok) throw new Error("not_authed");
    return res.json();
  },

  async logout() {
    await fetch(`${BASE}/api/logout`, {
      method: "POST",
      credentials: "include",
    });
  },
};
export default api;
