import React, { useState } from 'react';
import './patientlogin.css';


const Patientlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      console.log('Login successful');
      window.location.href="/patientlogin/submit"; // Redirect to dashboard or wherever you want
    } else {
      setError('Invalid username or password');
    }
  };
  return (
    <div className="login-form">
      <h2>Patient Login</h2>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
    
     
      <button className='login-btn' onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};







export default Patientlogin;



