import React, { useState } from 'react';
import './Doctorlogin.css';
import axios from 'axios';


const Doctorlogin = () => {
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

      const response = await axios.post('https://doctor-patient-c30db-default-rtdb.firebaseio.com/doctorlogin.json', data);
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
    window.location.href = "/doctorlogin/login"
  };

  return (
    <div className="login-form">
      <h2>Doctor Login</h2>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username1"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password1"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      
      <button className='login-btn' onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Doctorlogin;
