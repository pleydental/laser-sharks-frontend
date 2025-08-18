// src/lib/api.js

const IN_BROWSER = typeof window !== "undefined";
const ENV_BASE = (process.env.REACT_APP_AUTH_BASE ?? "").replace(/\/$/, "");

// In the browser:
// - If ENV_BASE is set, use it (e.g., http://localhost:4000 for local dev).
// - If ENV_BASE is empty, use "" (same-origin) so Netlify proxy handles /api/*.
// Outside the browser (build tools), fall back to localhost only if ENV_BASE is set.
const BASE = IN_BROWSER
  ? (ENV_BASE !== "" ? ENV_BASE : "")
  : (ENV_BASE !== "" ? ENV_BASE : "http://localhost:4000");

// Debug helper in DevTools
if (IN_BROWSER) window.__AUTH_BASE = BASE;

export const api = {
  async login(password, remember) {
    const res = await fetch(`${BASE}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ password, remember }),
    });
    if (!res.ok) throw new Error("login_failed");
    return res.json();
  },

  async me() {
    const res = await fetch(`${BASE}/api/me`, {
      credentials: "include",
    });
    return res.json();
  },

  async logout() {
    const res = await fetch(`${BASE}/api/logout`, {
      method: "POST",
      credentials: "include",
    });
    return res.json();
  },
};
