import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'; // Import CSS file for additional styling

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:7000/api/user/register', { name, email, password })
      .then(response => {
        console.log(response);
        navigate('/login');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="container" style={{marginTop:'100px'}}>
      <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <input type="text" placeholder="Username" required value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Register</button>
        </form>
        <div className="switch">
          <span>Already have an account? </span>
          <Link to="/login" className="switch-link">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
