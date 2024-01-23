// src/App.js
import React, { useState } from 'react';
import { login } from './AuthService';
import MainApp from './MainApp';
import './App.css'; // Import the CSS file

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email && password) {
      await login(email, password);
    }
  };

  return (
    <div className="container">
      <h1>React Firebase Activity Tracking App</h1>
      <div>
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
      <MainApp />
    </div>
  );
};

export default App;

