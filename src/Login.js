// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pyramid from './assets/pyramid.png';
import './Login.css';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'laser2025') {
      if (remember) {
        localStorage.setItem('loggedIn', 'true'); // persists login
      } else {
        sessionStorage.setItem('loggedIn', 'true'); // session only
      }
      onLogin();
      navigate('/');
    } else {
      alert('Ah shit, wrong password.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Laser Sharks<br />
      Fantasy Football League</h1>
      <img src={pyramid} alt="Pyramid" className="pyramid-img" />

      <div className="login-form">
        <input
          type="password"
          placeholder="Universal Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Stay Logged In
        </label>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
