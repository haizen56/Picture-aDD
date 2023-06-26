/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import the CSS file for the component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make API call to authenticate user
      const response = await axios.post('/api/login', { email, password });
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
