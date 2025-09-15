import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUser({ username: "mockUser" }); 
  }, []);

  const login = (username, password) => {
    if (password === "test123") {
      const mockToken = "mock-jwt-token";
      localStorage.setItem("token", mockToken);
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add this hook at the end:
export const useAuth = () => useContext(AuthContext);
