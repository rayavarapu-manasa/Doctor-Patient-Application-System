import React from 'react';
import './Submit.css';
import {Link} from 'react-router-dom';

function Submit() {
  return (
    <div className='navbar'>
      
    <div className='container'>
    <p>LifeCare+</p>
    <div className="main">
      <h1 >LifeCare Application System</h1>
      <Link to ="updateprofile" className='update-profile'>Update Profile</Link>
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
    </table>
    </div>
    <div className='rightcontent'>
      <h3>Schedule an appointment with doctor</h3>
      <div className="right-content">
          <label htmlFor="choosedoctor">Choose Doctor:</label>
          <select>
          <input type="choosedoctor" id="choosedoctor" name="choosedoctor"  />
          <option value="">Select a doctor</option>
          <option value="doctor1">Dr.Manasa(cardiology) </option>
            <option value="doctor2">Dr.Tejaswini(skin)</option>
            </select>
            <div className="right-content">
            <label htmlFor="date">Choose a Date:</label>
            <input type="date" id="date" name="date"  />
        </div>
        <button className="btn">Submit Appointment Request </button>
    </div>
    </div>
</div>
</div>
   
   
  )
}

export default Submit;
