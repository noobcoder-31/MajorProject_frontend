import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const storedUser = localStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("authUser");
  });

  useEffect(() => {
    // Update localStorage when authUser changes
    if (authUser) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("authUser");
    }
    setIsLoggedIn(!!authUser);
  }, [authUser]);

  const login = (user) => {
    setAuthUser(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem("authUser");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  const value = {
    authUser,
    login,
    logout,
    isLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
