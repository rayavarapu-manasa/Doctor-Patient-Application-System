


import React, { useState } from 'react';
import './Updatelogin.css';
import { Link } from 'react-router-dom';

const Updatelogin= () => {
  // Define state variables for each input field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [address, setAddress] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (!firstName || !lastName || !dateOfBirth || !phoneNumber || !speciality || !address) {
      alert('Please fill in all fields');
      return;
    }
    // If all fields are filled, log the form data
    const formData = {
      firstname: firstName,
      lastname: lastName,
      dateofbirth: dateOfBirth,
      phonenumber: phoneNumber,
      speciality: speciality,
      address: address
    };
    console.log('Form Data:', formData);
    // Reset form fields
    setFirstName('');
    setLastName('');
    setDateOfBirth('');
    setPhoneNumber('');
    setSpeciality('');
    setAddress('');
  };

  return (
    <div className="form">
      <h2>LifeCare Doctor update</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="firstname">Firstname:</label>
      <input type="text" id="firstname" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
    </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname:</label>
          <input type="text" id="lastname" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="dateofbirth">Date of birth:</label>
          <input type="date" id="dateofbirth" name="dateofbirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Phonenumber:</label>
          <input type="tel" id="phonenumber" name="phonenumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="speciality">Speciality:</label>
          <input type="text" id="speciality" name="speciality" value={speciality} onChange={(e) => setSpeciality(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
      
        {/* Render the link conditionally */}
        {firstName && lastName && dateOfBirth && phoneNumber && speciality && address ? (
          <Link to='/doctorlogin/login' className='update'>Update</Link>
        ) : (
          <button className='update' disabled>Update</button>
        )}

      </form>
    </div>
  );
};

export default Updatelogin;
