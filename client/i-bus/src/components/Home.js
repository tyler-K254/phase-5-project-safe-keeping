import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axiosInstance from './axiosInstance';

function Home() {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    // Fetch user data from the protected route
    axiosInstance
      .get('/Protected')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className='home-background'>
    {/* <h1>Your safari just began</h1> */}
    {/* Display user data */}
    {/* {userData ? (
        <div>
          <h2>Welcome, {userData.username}</h2>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Please sign in to access the protected route.</p>
      )} */}


    
    <div className='home-text'>
      <div className='title-div'>
      <h1>I-BUS BOOKING</h1>
      </div>
      <div className='why-us-div'>
      <h2 className='why-us-title'>WHY US</h2>
      <ul className='why-us-list'>
        <li>We cover multiple routes </li>
        <li>We are affordable </li>
        <li>We ensure you comfort</li>
        <li>Easy booking and payment</li>
      </ul>
      <h3>YOUR SAFARI JUST <br></br>BEGUN</h3>
      </div>
      </div>
    </div>
  )
}
export default Home
