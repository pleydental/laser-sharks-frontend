// src/utils/authPing.js
export async function authPing(url = "/api/me", timeoutMs = 5000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      method: "GET",
      credentials: "include",
      signal: ctrl.signal,
      headers: { Accept: "application/json" },
    });
    clearTimeout(timer);

    if (!res.ok) {
      return { ok: false, status: res.status, data: null };
    }
    const data = await res.json().catch(() => null);
    return { ok: true, status: res.status, data };
  } catch (_) {
    clearTimeout(timer);
    return { ok: false, status: "timeout_or_network", data: null };
  }
}
