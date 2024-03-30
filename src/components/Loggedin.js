import React, { useState } from 'react';
import './Loggedin.css';

function Loggedin() {
 
  const [registeredDoctor, setRegisteredDoctor] = useState(JSON.parse(localStorage.getItem('registeredDoctor')));
 
  const [registeredDoctors, setRegisteredDoctors] = useState([]);
  const [registeredPatient, setRegisteredPatient] = useState(JSON.parse(localStorage.getItem('registeredPatient')));
  const [registeredPatients, setRegisteredPatients] = useState([]);

  const handlePatientApprove = () => {
    
    setRegisteredPatients(prevPatients => [...prevPatients, registeredPatient]);
    
    setRegisteredPatient(null);
    
    localStorage.removeItem('registeredPatient');
  };

  const handleDoctorApprove = () => {

    setRegisteredDoctors(prevDoctors => [...prevDoctors, registeredDoctor]);
    setRegisteredDoctor(null);
    localStorage.removeItem('registeredDoctor');

    
  };
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
          <tbody>
            {registeredPatient && (
              <tr>
                <td>{registeredPatient.firstname}</td>
                <td>{registeredPatient.lastname}</td>
                <td>{registeredPatient.dateofbirth}</td>
                <td>{registeredPatient.phonenumber}</td>
                <td>{registeredPatient.address}</td>
                <td>
                  <button onClick={handlePatientApprove}>Approve</button>
                </td>
              </tr>
            )}
          </tbody>
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
          <tbody>
            {registeredDoctor && (
              <tr>
                <td>{registeredDoctor.firstname}</td>
                <td>{registeredDoctor.lastname}</td>
                <td>{registeredDoctor.dateofbirth}</td>
                <td>{registeredDoctor.phonenumber}</td>
                <td>{registeredDoctor.address}</td>
                <td>{registeredDoctor.doctorid}</td>
                <td>{registeredDoctor.speciality}</td>
                <td><button onClick={handleDoctorApprove}>Approve</button></td> {/* You can set the approval status accordingly */}
              </tr>
            )}
          </tbody>
        </table>
        <h3>Registered Patients</h3>
          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Date of birth</th>
                <th>Phonenumber</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {registeredPatients.map((patient, index) => (
                <tr key={index}>
                  <td>{patient.firstname}</td>
                  <td>{patient.lastname}</td>
                  <td>{patient.dateofbirth}</td>
                  <td>{patient.phonenumber}</td>
                  <td>{patient.address}</td>
                </tr>
              ))}
            </tbody>
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

            </tr>
          </thead>
          <tbody>
            {registeredDoctors.map((doctor, index) => (
              <tr key={index}>
                <td>{doctor.firstname}</td>
                <td>{doctor.lastname}</td>
                <td>{doctor.dateofbirth}</td>
                <td>{doctor.phonenumber}</td>
                <td>{doctor.address}</td>
                <td>{doctor.doctorid}</td>
                <td>{doctor.speciality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div >
  )
}

export default Loggedin
