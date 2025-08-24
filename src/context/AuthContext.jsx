// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../lib/api"; // keep this path

/**
 * Status:
 *  - "checking": verifying cookie/session with backend
 *  - "in": authenticated
 *  - "out": not authenticated
 */

const AuthContext = createContext({
  status: "checking",
  login: async (_password, _remember) => {},
  logout: async () => {},
});

export function AuthProvider({ children }) {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await api.me(); // expects { ok: boolean }
        if (!cancelled) setStatus(res?.ok ? "in" : "out");
      } catch {
        if (!cancelled) setStatus("out");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => {
    return {
      status,
      login: async (password, remember) => {
        const res = await api.login(password, remember); // throws on !ok
        setStatus("in");
        return res;
      },
      logout: async () => {
        try {
          if (api.logout) {
            await api.logout();
          } else {
            await fetch(`${window.__AUTH_BASE || ""}/api/logout`, {
              method: "POST",
              credentials: "include",
            });
          }
        } finally {
          setStatus("out");
        }
        return { ok: true };
      },
    };
  }, [status]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

