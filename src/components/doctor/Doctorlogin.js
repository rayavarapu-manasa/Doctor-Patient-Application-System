// import React,{ useState } from 'react';
// import './Doctorlogin.css';
// import {Link} from 'react-router-dom';

// const Doctorlogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isFormValid,setIsFormValid]=useState(false);

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//     checkFormValidity(event.target.value, password);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     checkFormValidity(username,event.target.value);
//   };
//   const checkFormValidity = (newUsername, newPassword) => {
   
//     if (newUsername.trim() !== '' && newPassword.trim() !== '') {
//       setIsFormValid(true);
//     } else {
//       setIsFormValid(false);
//     }
//   };
//   const handleLogin = () => {
//     Event.preventDefault(); 
//     if (isFormValid) {
      
//       console.log('Username:', username);
//       console.log('Password:', password);
//     } else {
    
//       console.log('Please enter username and password.');
//     }
   
//   };
  
    

  

//   return (
//     <div className="login-form">
//       <h2>Doctor Login</h2>
//       <div className="input-group">
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username1"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//       </div>
//       <div className="input-group">
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password1"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </div>
      
//       {isFormValid ? (
//         <Link to="login" className='login-btn' onClick={handleLogin}>Login</Link>
//       ) : (
//         <button className='login-btn' onClick={handleLogin} disabled>Login</button>
//       )}
    
//     </div>
//   );
// };




// export default Doctorlogin;


import React, { useState } from 'react';
import './Doctorlogin.css';


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

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      console.log('Login successful');
      window.location.href="doctorlogin/login"; // Redirect to dashboard or wherever you want
    } else {
      setError('Invalid username or password');
    }
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
