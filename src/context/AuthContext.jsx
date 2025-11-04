// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [status, setStatus] = useState("loading"); // 'loading' | 'in' | 'out'

  const check = useCallback(async () => {
    try {
      const r = await fetch("/api/me", { credentials: "include" });
      setStatus(r.ok ? "in" : "out");
    } catch {
      setStatus("out");
    }
  }, []);

  useEffect(() => { check(); }, [check]);

  const login = useCallback(async (password, remember) => {
    const r = await fetch("/api/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, remember: !!remember }),
    });
    if (!r.ok) throw new Error("bad password");
    setStatus("in");
  }, []);

  const logout = useCallback(async () => {
    try { await fetch("/api/logout", { credentials: "include" }); } catch {}
    setStatus("out");
  }, []);

  return (
    <AuthCtx.Provider value={{ status, login, logout, check }}>
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  return useContext(AuthCtx);
}
