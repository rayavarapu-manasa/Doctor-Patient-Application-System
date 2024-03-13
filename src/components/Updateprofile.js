import React, { useState } from 'react';
import './Updateprofile.css';
import { Link } from 'react-router-dom';

const Updateprofile= () => {
  // Define state variables for each input field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (!firstName || !lastName || !dateOfBirth || !address) {
      alert('Please fill in all fields');
      return;
    }
    // If all fields are filled, log the form data
    const formData = {
      firstname: firstName,
      lastname: lastName,
      dateofbirth: dateOfBirth,
      address: address
    };
    console.log('Form Data:', formData);
    // Reset form fields
    setFirstName('');
    setLastName('');
    setDateOfBirth('');
    setAddress('');
  };

  return (
    <div className="registration-form">
      <h2>LifeCare Patient Update</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">Firstname:</label>
           <input type="text" id="firstname1" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname:</label>
          <input type="text" id="lastname1" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="dateofbirth">Date of birth:</label>
          <input type="date" id="dateofbirth1" name="dateofbirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        {firstName && lastName && dateOfBirth && address ? (
          <Link to='/patientlogin/submit' className='upda'>Update</Link>
        ) : (
          <button className='upda' disabled>Update</button>
        )}
      </form>
    </div>
  );
};

export default Updateprofile;



