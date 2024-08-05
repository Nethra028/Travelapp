import React from 'react';
import  { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/register', {
        name,
        email,
        password
      });
      if (response.status === 201) {
        alert('User registered successfully');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert('Email already exists');
      } else {
        alert('An error occurred');
      }
    }
  };
  return (
    <div className='form-modal__container'> 
      <div className='form-modal__wrapper' >
        <div className='sign-up'>
          <img src='/images/img-8.jpg' alt='Camels in the desert'></img>
        </div>
        <div className='sign-up__container'>
          <h2>Sign Up</h2>
          <form className='sign-up__form'>
          <label> Name</label> 
          <input type='text' placeholder=' Name'></input><br></br>
            <label>Email</label> <br></br>
            <input type='text' placeholder='adcd123@gmail.com'></input><br></br>
            <label>Password</label> <br></br>
            <input type='password' placeholder='password'></input><br></br>
            <Link to='/' className='nav-links'  >
                
            <button type='submit' className='btn-sign'>Sign Up</button>
            </Link>
          </form>

          <div>
             
            <Link to='/log-in' className='nav-links'  >
            <p className='have-account'>Have an account? 
              <span>Log In here </span>
              </p>
              </Link>
          </div>
        </div>

      </div>
    </div>
  );
}