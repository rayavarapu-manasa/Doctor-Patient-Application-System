import React from 'react';
import './index.css';

function Mainpage() {
  return (
   
      <div className='navbar'>
      
        <div className='container'>
        <p>LifeCare+</p>
        <div className="main">
          <h1 >LifeCare Application System</h1>
          </div>
     
         <div className="left">
         <h4>For Registered users</h4>
          <ul>
            <li>
              <a href="/doctorlogin">Doctorlogin</a>
            </li>
            <li>
              <a href="/patientlogin">Patientlogin</a>
            </li>
            <li>
              <a href="/adminlogin">Adminlogin</a>
            </li>
            </ul>
          </div>
            <div className='right'>
            <h4>For new users</h4>
            <ul>
            <li>
              <a href="/doctorregistration">Doctorregistration</a>
            </li>
            <li>
              <a href="/patientregistration">Patientregistration</a>
            </li>
          </ul>
          </div>
         
        </div>
        
      </div>
   
   
  );
}

export default Mainpage;


