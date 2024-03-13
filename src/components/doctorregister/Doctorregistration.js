import React, { useState } from 'react';
import './Doctorregistration.css';
import { Link } from 'react-router-dom';

const Doctorregistration = () => {
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
  React.useEffect(() => {
    const filled = Object.values(formData).every(value => value.trim() !== '');
    setIsFormFilled(filled);
  }, [formData]);
  
  return (
    <div className="registration-form">
      <h2>LifeCare Doctor Registration</h2>
      <form >
        <div className="form-group">
          <label htmlFor="firstname">Firstname:</label>
          <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname:</label>
          <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dateofbirth">Date of birth:</label>
          <input type="date" id="dateofbirth" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Phonenumber:</label>
          <input type="tel" id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="doctorid">Doctor ID:</label>
          <input type="text" id="doctorid" name="doctorid" value={formData.doctorid} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="speciality">Speciality:</label>
          <input type="text" id="speciality" name="speciality" value={formData.speciality} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password for login:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        
        {isFormFilled ? (
          <Link to="/doctorlogin" className='reg-btn' >Register</Link>
        ) : (
          <button className='reg-btn' disabled>Register</button>
        )}
      </form>
    </div>
  );
};

export default Doctorregistration;

