import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', {
        username,
        password
      }, { withCredentials: true });

      setMsg(res.data.message || "Login successful");

      if (res.status === 200 && res.data.message === "Login successful") {
        window.location.href = "http://localhost:5174";
      }
    } catch (err) {
      console.error("Login failed", err);
      setMsg("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <div className="d-grid mb-3">
                <button className="btn btn-success" type="submit">Login</button>
              </div>
            </form>
            {msg && <div className="alert alert-info text-center">{msg}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
