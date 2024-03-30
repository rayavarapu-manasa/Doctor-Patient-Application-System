// import React from 'react';
// import './Submit.css';
// import {Link} from 'react-router-dom';

// function Submit() {
//   return (
//     <div className='navbar'>
      
//     <div className='container'>
//     <p>LifeCare+</p>
//     <div className="main">
//       <h1 >LifeCare Application System</h1>
//       <Link to ="updateprofile" className='update-profile'>Update Profile</Link>
//       </div>
//     <div className='leftcontent'>
//     <h3>Doctors and their Scheduled Appointments</h3>
//     <table>
//     <thead>
//     <tr>
//     <th>Doctor Name</th>
//     <th>Appointment Date</th>
//     </tr>
//     </thead>
//     </table>
//     </div>
//     <div className='rightcontent'>
//       <h3>Schedule an appointment with doctor</h3>
//       <div className="right-content">
//           <label htmlFor="choosedoctor">Choose Doctor:</label>
//           <select>
//           <input type="choosedoctor" id="choosedoctor" name="choosedoctor"  />
//           <option value="">Select a doctor</option>
//           <option value="doctor1">Dr.Manasa(cardiology) </option>
//             <option value="doctor2">Dr.Tejaswini(skin)</option>
//             </select>
//             <div className="right-content">
//             <label htmlFor="date">Choose a Date:</label>
//             <input type="date" id="date" name="date"  />
//         </div>
//         <button className="btn">Submit Appointment Request </button>
//     </div>
//     </div>
// </div>
// </div>
   
   
//   )
// }

// export default Submit;


import React, { useState } from 'react';
import './Submit.css';
import { Link } from 'react-router-dom';

function Submit() {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [appointments, setAppointments] = useState([]);

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedDoctor && selectedDate) {
      const newAppointment = { doctor: selectedDoctor, date: selectedDate };
      setAppointments([...appointments, newAppointment]);
    }
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <p>LifeCare+</p>
        <div className="main">
          <h1>LifeCare Application System</h1>
          <Link to="updateprofile" className='update-profile'>Update Profile</Link>
        </div>
        <div className='leftcontent'>
          <h3>Doctors and their Scheduled Appointments</h3>
          <table>
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Appointment Date</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='rightcontent'>
          <h3>Schedule an appointment with doctor</h3>
          <div className="right-content">
            <label htmlFor="choosedoctor">Choose Doctor:</label>
            <select value={selectedDoctor} onChange={handleDoctorChange}>
              <option value="">Select a doctor</option>
              <option value="Dr.Manasa(cardiology)">Dr.Manasa (cardiology)</option>
              <option value="Dr.Tejaswini(skin)">Dr.Tejaswini (skin)</option>
            </select>
            <div className="right-content">
              <label htmlFor="date">Choose a Date:</label>
              <input type="date" id="date" name="date" value={selectedDate} onChange={handleDateChange} />
            </div>
            <button className="btn" onClick={handleSubmit}>Submit Appointment Request</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submit;