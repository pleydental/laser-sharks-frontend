// src/utils/api.js
export async function api(path, options = {}) {
  const res = await fetch(`/api${path}`, {
    credentials: 'include',
    ...options,
  });
  let body = null;
  try { body = await res.json(); } catch (_) {}
  return { res, body };
}
