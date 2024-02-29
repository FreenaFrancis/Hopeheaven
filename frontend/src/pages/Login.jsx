import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:7000/api/user/login", { email, password })
      .then(res => {
        console.log("Response data:", res.data); // Log the entire response data
        if (res.data.Status === "Success") {
          const userId = res.data._id; // Assuming the user ID is stored in '_id'
          console.log("User ID:", userId);
          if (res.data.role === "admin") {
            navigate("/admin");
          } else {
            navigate(`/home/${userId}`);
          }
        } else {
          console.log("Login failed");
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container" style={{marginTop:'100px'}}> {/* Add a container with fixed width */}
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div className="switch">
          <span>Don't have an account? </span>
          <Link to={'/register'}>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
