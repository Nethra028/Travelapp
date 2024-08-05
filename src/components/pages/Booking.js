import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function Booking() {
  return (
    <>
      <div className='destination'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h1>Craft Your Adventure Tale </h1>
          <p>Fill your following details to book your own adventure tale </p>
          <form>
          <label>  <h5>First Name</h5></label> <br></br>
            <input type='text' placeholder='First Name'></input><br></br><br></br>
            <label><h5>Last Name</h5></label> <br></br>
            <input type='text' placeholder='Last Name'></input><br></br><br></br>
            <label><h5>Email</h5></label> <br></br>
            <input type='text' placeholder='adcd123@gmail.com'></input><br></br><br></br>
            <label><h5>Mobile Number</h5></label> <br></br>
            <input type='text' placeholder='xxxxxxxxxx'></input><br></br>
           </form>
        </div>
        
      
        <div className='booking-container'>
          <div className='booking-wrapper'>
            <section className='booking-info'>
              <h5>Payment Details</h5>
              <p className='price'>Debit Card</p>
              <p className='price'>Credit Card</p>
              <p className='price'>UPI</p>
              
            </section>
            <Link to='/services'>
            <button type='button' className='btn-book'>Pay Now</button>
            </Link>
          </div>
        </div>
      
      </div>
      <Footer />
    </>
  );
}
