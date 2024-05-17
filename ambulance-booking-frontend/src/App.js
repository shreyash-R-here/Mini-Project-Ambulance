// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import BookAmbulance from './components/BookAmbulance';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Profile from './components/Profile';
import ApiIntegration from './components/ApiIntegration';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/book-ambulance" element={<BookAmbulance />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
