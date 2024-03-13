import React from 'react';
import './Loggedin.css';

function Loggedin() {
  return (
    <div className='navbarlog'>
      
    <div className='containerlog'>
    <p>LifeCare+</p>
    <div className="mainlog">
      <h1 >LifeCare Application System</h1>
      </div>
      <div className='content'>
      <h3>Patient Registration Requests</h3>
      <table>
      <thead>
      <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Date of birth</th>
      <th>Phonenumber</th>
      <th>Address</th>
      <th>Approval</th>
      </tr>
      </thead>
      </table>

      <h3>Doctor Registration Requests</h3>
      <table>
      <thead>
      <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Date of birth</th>
      <th>Phonenumber</th>
      <th>Address</th>
      <th>Doctor ID</th>
      <th>Speciality</th>
      <th>Approval</th>
      </tr>
      </thead>
      </table>
      <h3>Registered patients</h3>
      <table>
      <thead>
      <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Date of birth</th>
      <th>Phonenumber</th>
      <th>Address</th>
      <th>Delete</th>
      </tr>
      </thead>
      </table>
      <h3> Registered Doctors</h3>
      <table>
      <thead>
      <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Date of birth</th>
      <th>Phonenumber</th>
      <th>Address</th>
      <th>Doctor ID</th>
      <th>Speciality</th>
      <th>delete</th>
      </tr>
      </thead>
      </table>
      </div>
    </div>
    </div>
  )
}

export default Loggedin
