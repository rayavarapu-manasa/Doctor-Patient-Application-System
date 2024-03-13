import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage';
import Doctorlogin from './components/doctor/Doctorlogin';
import Patientlogin from './components/patient/Patientlogin';
import Adminlogin from './components/admin/Adminlogin';
import Doctorregistration from './components/doctorregister/Doctorregistration';
import Patientregistration from './components/patientregister/Patientregistration';
import Login from './components/Login'; 
import Submit from './components/Submit';
import Loggedin from './components/Loggedin';
import Updatelogin from './components/Updatelogin';
import Updateprofile from './components/Updateprofile';






function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/doctorlogin" element={<Doctorlogin/>} />
        <Route path="/doctorlogin/login" element={<Login/>} />
        <Route path="/patientlogin" element={<Patientlogin />} />
        <Route path="/patientlogin/submit" element={<Submit/>} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/adminlogin/loggedin" element={<Loggedin/>} />
        <Route path="/doctorregistration" element={<Doctorregistration />} />
        <Route path="/patientregistration" element={<Patientregistration />} />
        <Route path="/doctorlogin/login/updatelogin" element={<Updatelogin/>}/>
        <Route path="/patientlogin/submit/updateprofile" element={<Updateprofile/>}/>
   
      </Routes>
    </Router>
  
  );
 }

export default App;



