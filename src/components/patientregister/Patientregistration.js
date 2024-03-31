import React, { useState, useEffect } from 'react';
import './Patientregistration.css';
import axios from 'axios';

const Patientregistration = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dateofbirth: '',
    phonenumber: '',
    address: '',
    username: '',
    password: ''
  });
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Check if all form fields are filled
  useEffect(() => {
    const filled = Object.values(formData).every(value => value.trim() !== '');
    setIsFormFilled(filled);
  }, [formData]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('username', formData.username);
    localStorage.setItem('password', formData.password);
    localStorage.setItem('registeredPatient', JSON.stringify(formData));
      const response = await axios.post('https://doctor-patient-c30db-default-rtdb.firebaseio.com/register.json', formData);
      console.log('Data submitted successfully:', response.data);
      alert("Registered Successfully");
      setFormData({
        firstname: '',
        lastname: '',
        dateofbirth: '',
        phonenumber: '',
        address: '',
        username: '',
        password: ''
      });
    } catch (error) {
      console.error('Error submitting data:', error);
      alert("Error occurred while submitting data. Please try again later.");
    }
    window.location.href="/patientlogin";
  };

  return (
    <div className="registration-form">
      <h2>LifeCare Patient Registration</h2>
      <form autoComplete='off' onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="Firstname">Firstname:</label>
          <input type="text" id="Firstname1" name="firstname" value={formData.firstname} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Lastname">Lastname:</label>
          <input type="text" id="Lastname1" name="lastname" value={formData.lastname} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Dateofbirth">Date of birth:</label>
          <input type="date" id="Dateofbirth1" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Phonenumber">Phonenumber:</label>
          <input type="tel" id="Phonenumber1" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address1" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username1" name="username" value={formData.username} onChange={handleChange} autoComplete="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password for login:</label>
          <input type="password" id="password1" name="password" value={formData.password} onChange={handleChange} autoComplete="current-password" />
        </div>
        
        <button type="submit" className="register-button" disabled={!isFormFilled}>Register</button>
      </form>
    </div>
  );
};

export default Patientregistration;
