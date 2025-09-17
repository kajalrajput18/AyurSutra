// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy auth for now
    if (email === "test@test.com" && password === "123456") {
      alert("Login successful ✅");
      navigate("/dashboard"); // redirect after login
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-600 to-green-700 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl max-h-screen">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          AyurSutra Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-green-500" />
              <span className="text-gray-600">Remember Me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-green-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-green-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
