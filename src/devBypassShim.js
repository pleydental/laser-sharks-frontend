// src/devBypassShim.js
const devBypass = process.env.REACT_APP_DEV_BYPASS === "1";

if (devBypass) {
  const origFetch = window.fetch.bind(window);

  window.fetch = async (input, init = {}) => {
    try {
      const url = typeof input === "string" ? input : input.url;

      // Fake /api/me: always "logged in" locally
      if (url.endsWith("/api/me")) {
        return new Response(JSON.stringify({ ok: true, devBypass: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Fake /api/login: accept anything
      if (url.endsWith("/api/login")) {
        return new Response(JSON.stringify({ ok: true, devBypass: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Fake /api/logout
      if (url.endsWith("/api/logout")) {
        return new Response(JSON.stringify({ ok: true, devBypass: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Everything else = normal fetch
      return origFetch(input, init);
    } catch (e) {
      // If anything weird happens, fall back to normal fetch
      return origFetch(input, init);
    }
  };
}
