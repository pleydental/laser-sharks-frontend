import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { api } from "../lib/api";

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export function AuthProvider({ children }) {
  const [status, setStatus] = useState("checking"); // "checking" | "in" | "out"
  const [user, setUser] = useState(null);

  const refresh = useCallback(async () => {
    try {
      const res = await api.me();            // asks backend if cookie is valid
      setUser(res.user || { role: "member" });
      setStatus("in");
    } catch {
      setUser(null);
      setStatus("out");
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const login = async (password, remember) => {
    await api.login(password, remember);     // sets cookie
    await refresh();                         // updates state
  };

  const logout = async () => {
    await api.logout();                      // clears cookie
    setUser(null);
    setStatus("out");
  };

  return (
    <AuthCtx.Provider value={{ status, user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}
