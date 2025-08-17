// src/lib/api.js

// Dev: defaults to http://localhost:4000
// Prod: set VITE_API_BASE (Vite) or REACT_APP_API_BASE (CRA) to your backend URL
const API_BASE =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_API_BASE) ||
  (typeof process !== "undefined" && process.env && process.env.REACT_APP_API_BASE) ||
  "http://localhost:4000";

// Small fetch wrapper that always sends/receives cookies
async function json(req) {
  const res = await fetch(req.url, {
    method: req.method || "GET",
    headers: { "Content-Type": "application/json", ...(req.headers || {}) },
    credentials: "include", // IMPORTANT: includes the auth cookie
    body: req.body ? JSON.stringify(req.body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || "request_failed");
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export const api = {
  login: (password, remember) =>
    json({ url: `${API_BASE}/api/login`, method: "POST", body: { password, remember } }),
  me: () => json({ url: `${API_BASE}/api/me` }),
  logout: () => json({ url: `${API_BASE}/api/logout`, method: "POST" }),
  // quick connectivity check while developing:
  health: () => json({ url: `${API_BASE}/api/health` }),
};
