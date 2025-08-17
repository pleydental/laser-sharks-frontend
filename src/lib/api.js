// src/lib/api.js
const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";
const BASE = isLocal ? "http://localhost:4000" : "/api";   // <-- production uses the Netlify proxy

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
    if (!res.ok) throw new Error("not_authed");
    return res.json();
  },

  async logout() {
    await fetch(`${BASE}/logout`, { method: "POST", credentials: "include" });
  },
};
