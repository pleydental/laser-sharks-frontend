// src/lib/api.js
const BASE = "/api";                 // <-- always same-origin now
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
    if (!res.ok) throw new Error("not_authed");
    return res.json();
  },

  async logout() {
    await fetch(`${BASE}/logout`, { method: "POST", credentials: "include" });
  },
};
export default api;
