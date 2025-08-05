import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/signup', {
        email,
        password,
        username,
      });
      setMsg(res.data.message || "Login successful");
      if (res.status === 200 && res.data.message === "Signup successful") {
        window.location.href = "http://localhost:5174";
      }
    } catch (error) {
      console.error("Signup failed", error);
      setMsg("Signup failed. Try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Signup</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
              </div>
              <div className="d-grid">
                <Link to="/login" className="btn btn-outline-secondary">
                  Login
                </Link>
              </div>
            </form>
            {msg && <div className="alert alert-info mt-3 text-center">{msg}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
