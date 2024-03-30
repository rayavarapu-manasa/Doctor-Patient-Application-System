// import React from 'react';
// import './Login.css';
// import {Link} from 'react-router-dom';
// function Login() {
 

//   return (
//     <div className='nav'>
      
//     <div className='contain'>
   
//     <Link to ="updatelogin" className='update-profile-link'>Update Profile</Link>
//     <div className="heading">
//       <h1 >LifeCare Application System</h1>
//       <h3>Welcome</h3>
//       <div className='fixed'>
//       <h4>Your Fixed Appointment</h4>
//       <table>
//       <thead>
//       <tr>
//       <th>Patient Name</th>
//       <th>Patient number</th>
//       <th>Appointment Date</th>
//       </tr>
//       </thead>
//       </table>
//       </div>
//       <div className='request'>
//       <h4>Appointment Requests</h4>
//       <table>
//       <thead>
//       <tr>
//       <th>Patient Name</th>
//       <th>Patient number</th>
//       <th>Appointment Date</th>
//       <th>Approval</th>
//       </tr>
//       </thead>
//       </table>
//       </div>
//       </div>
//       </div>
//       </div>
// )}

// export default Login


import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [submittedAppointments, setSubmittedAppointments] = useState([]);
  const [fixedAppointments, setFixedAppointments] = useState([]);

  const handleApproval = (index) => {
    const approvedAppointment = submittedAppointments[index];
    setFixedAppointments([...fixedAppointments, approvedAppointment]);
    setSubmittedAppointments(submittedAppointments.filter((_, i) => i !== index));
  };

  return (
    <div className='nav'>
      <div className='contain'>
        <Link to ="updatelogin" className='update-profile-link'>Update Profile</Link>
        <div className="heading">
          <h1>LifeCare Application System</h1>
          <h3>Welcome</h3>
        </div>
        <div className='fixed'>
          <h4>Fixed Appointment</h4>
          <table>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Appointment Date</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className='request'>
          <h4>Appointment Requests</h4>
          <table>
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Appointment Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {submittedAppointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.date}</td>
                  <td>
                    <button onClick={() => handleApproval(index)}>Approve</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Login;

