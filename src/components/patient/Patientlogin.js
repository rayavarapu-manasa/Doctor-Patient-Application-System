import React, { useState } from 'react';
import './patientlogin.css';
import axios from 'axios';

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
  
  const handleLogin = async(event) => {
    event.preventDefault(); 
    try {
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      
      const data = {
        username: username,
        password: password
      };

      const response = await axios.post('https://doctor-patient-c30db-default-rtdb.firebaseio.com/doctorregister.json', data);
      console.log('Data submitted successfully:', response.data);

      if (username === storedUsername && password === storedPassword) {
        console.log('Login successful');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert("Error occurred while submitting data. Please try again later.");
    }
    window.location.href = "/patientlogin/submit"
  };


  return (
    <div className="login-form">
      <h2>Patient Login</h2>
      <form onSubmit={handleLogin}> {/* Wrap input fields within a form */}
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />
        </div>
        <button className='login-btn' type="submit" onClick={handleLogin}>Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Patientlogin;


