// src/lib/api.js
const PROD_BASE = "https://laser-sharks-auth.onrender.com";
const DEV_BASE  = "http://localhost:4000";

const BASE =
  typeof window !== "undefined" && window.location.hostname.endsWith("netlify.app")
    ? PROD_BASE
    : (process.env.NODE_ENV === "production" ? PROD_BASE : DEV_BASE);

// tiny helper to log once
if (typeof window !== "undefined" && !window.__LOGGED_API_BASE__) {
  console.log("[api] BASE =", BASE);
  window.__LOGGED_API_BASE__ = true;
}

async function jfetch(path, opts = {}) {
  const res = await fetch(`${BASE}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
    ...opts,
  });
  return res;
}

export const api = {
  async me() {
    const r = await jfetch("/api/me");
    if (!r.ok) return { ok: false };
    return r.json();
  },

  async login(password, remember) {
    const r = await jfetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ password, remember }),
    });
    if (!r.ok) throw new Error("bad_credentials");
    return r.json();
  },

  async logout() {
    const r = await jfetch("/api/logout", { method: "POST" });
    return r.ok ? { ok: true } : { ok: false };
  },

  async health() {
    const r = await jfetch("/api/healthz");
    return { status: r.status, ok: r.ok };
  },
};

export default api;

