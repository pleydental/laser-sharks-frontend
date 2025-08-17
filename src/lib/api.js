// src/lib/api.js
// In prod, use the Netlify env var. In dev, fall back to local server.
const BASE =
  (process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_AUTH_BASE
    : "http://localhost:4000");

// optional helper so you can check in DevTools
if (typeof window !== "undefined") window.__AUTH_BASE = BASE;

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
    const res = await fetch(`${BASE}/api/me`, { credentials: "include" });
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
