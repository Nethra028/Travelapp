import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


export default function LogIn() {
  return (
    <div className='form-modal__container'>
      <div className='form-modal__wrapper' >
        <div className='sign-up'>
          <img src='/images/img-10.jpg' alt='Camels in the desert'></img>
        </div>
        <div className='sign-up__container'>
          <h2>Log In</h2>
          <form className='sign-up__form'>
            
            
            <label>Email</label> <br></br>
            <input type='text' placeholder='adcd123@gmail.com'></input><br></br>
            <label>Password</label> <br></br>
            <input type='password' placeholder='password'></input><br></br>
            <Link to='/' className='nav-links'  >
                
            <button type='submit' className='btn-sign'>LogIn</button>
            </Link>
          </form>

          <div>
           
            <Link to='/sign-up' className='nav-links'  >
            <p className='have-account'>Don't have an account?
                <span>Sign Up here </span>
                </p>
                </Link>
                
          </div>
        </div>

      </div>
    </div>
  );
}