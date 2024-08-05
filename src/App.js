import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Destination from './components/pages/Destination';
import LogIn from './components/pages/LoginIn';
import Destination1 from './components/pages/Destination1';
import Booking from './components/pages/Booking';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/sign-up' exact element={<SignUp />} />
          <Route path='/services/activity' element={<Destination />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/destination-1' element={<Destination1 />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
