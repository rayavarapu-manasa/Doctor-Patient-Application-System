import React, { useState } from 'react';
import './Patientregistration.css';
import { Link } from 'react-router-dom';

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
  React.useEffect(() => {
    const filled = Object.values(formData).every(value => value.trim() !== '');
    setIsFormFilled(filled);
  }, [formData]);

  const handleRegistration = () => {
    if (isFormFilled) {
      // Store username and password in localStorage
      localStorage.setItem('username', formData.username);
      localStorage.setItem('password', formData.password);
      
      localStorage.setItem('registeredPatient', JSON.stringify(formData));
      // Clear the form data
      setFormData({
        firstname: '',
        lastname: '',
        dateofbirth: '',
        phonenumber: '',
        address: ''
      
      });
    }
  };
  return (
    <div className="registration-form">
      <h2>LifeCare Patient Registration</h2>
      <form>
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
          <input type="text" id="username1" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password for login:</label>
          <input type="password" id="password1" name="password" value={formData.password} onChange={handleChange} />
        </div>
        
        {isFormFilled ? (
          <Link to="/Patientlogin" className="register-button" onClick={handleRegistration} >Register</Link>
        ) : (
          <button className='register-button' disabled>Register</button>
        )}
      </form>
    </div>
  );
};

export default Patientregistration;





