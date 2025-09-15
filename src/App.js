import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ContractDetail from "./pages/ContractDetail";
import { AuthProvider, useAuth } from "./context/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useAuth(); 
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/contracts/:id"
            element={
              <PrivateRoute>
                <ContractDetail />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
