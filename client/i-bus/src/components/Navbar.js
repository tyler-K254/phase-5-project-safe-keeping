import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div  className='navigation-bar'>
      <NavLink className='navLink' exact to='/'>
        Home 
      </NavLink>
      <NavLink className='navLink' to='/Booking'>
        Booking 
      </NavLink>
      <NavLink className='navLink' to='/Payment'>
        Payment 
      </NavLink>
      <NavLink className='navLink' to='/Contact'>
        Contact 
      </NavLink>
      <div className='sign-in-container'>
      <div className='admin-sign-up-div'>
    <NavLink className='admin-sign-in' to='/Signin'>
        ADMIN SIGN IN 
      </NavLink>
      </div>

      <div className='customer-sign-up-div'>
      <NavLink className='customer-sign-in' to='/Signin'>
        CUSTOMER SIGN IN 
      </NavLink>
    </div>
    </div>
      
    </div>
  );
}

export default Navbar;
