// add at top
const IS_DEV = typeof window !== "undefined" && window.location.hostname === "localhost";

// ...keep your existing code...

export const api = {
  async login(password, remember) {
    if (IS_DEV) return { ok: true };                // ⬅️ dev: pretend success
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
    if (IS_DEV) return { ok: true };                // ⬅️ dev: always “logged in”
    const res = await fetch(`${BASE}/api/me`, { credentials: "include" });
    if (!res.ok) throw new Error("me_failed");
    return res.json();
  },

  async logout() {
    if (IS_DEV) return { ok: true };                // ⬅️ dev: no-op
    const res = await fetch(`${BASE}/api/logout`, { method: "POST", credentials: "include" });
    if (!res.ok) throw new Error("logout_failed");
    return res.json();
  },
};
