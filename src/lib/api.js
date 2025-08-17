// src/lib/api.js
const BASE = process.env.REACT_APP_AUTH_BASE || "http://localhost:4000";

export const api = {
  async login(password, remember) {
    const res = await fetch(`${BASE}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",           // <— cookie comes back
      body: JSON.stringify({ password, remember }),
    });
    if (!res.ok) throw new Error("login_failed");
    return res.json();
  },

  async me() {
    const res = await fetch(`${BASE}/api/me`, {
      credentials: "include",           // <— send cookie
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
