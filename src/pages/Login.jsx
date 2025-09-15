import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Password must be test123.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          SaaS Contracts Login
        </h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (test123)"
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <div className="text-center mt-4">
          <Link
            to="/dashboard"
            className="text-indigo-600 hover:text-indigo-800 underline text-sm"
          >
            Continue without login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
