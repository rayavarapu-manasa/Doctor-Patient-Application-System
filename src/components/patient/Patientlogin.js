import React, { useState } from 'react';
import './patientlogin.css';
import {Link} from 'react-router-dom';

const Patientlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid,setIsFormValid]=useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    checkFormValidity(event.target.value, password);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    checkFormValidity(username,event.target.value);
  };
  const checkFormValidity = (newUsername, newPassword) => {
   
    if (newUsername.trim() !== '' && newPassword.trim() !== '') {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleLogin = () => {
    Event.preventDefault(); 
    if (isFormValid) {
      
      console.log('Username:', username);
      console.log('Password:', password);
    } else {
    
      console.log('Please enter username and password.');
    }
  };
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   // Check if username and password match a registered user
  //   if (username === 'yourRegisteredUsername' && password === 'yourRegisteredPassword') {
  //     console.log('Login Successful');
  //     // Redirect to the submit page or perform any other action upon successful login
  //   } else {
  //     setErrorMessage('Invalid username or password');
  //   }
  // };

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
    
      {isFormValid ? (
        <Link to="submit" className='login-btn' onClick={handleLogin}>Login</Link>
      ) : (
        <button className='login-btn' onClick={handleLogin} disabled>Login</button>
      )}
    </div>
  );
};







export default Patientlogin;



