import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5555/Signin', { username, password })
      .then((response) => {
        // Save the JWT token to localStorage or session storage for subsequent requests
        localStorage.setItem('access_token', response.data.access_token);
        // Redirect the user to the protected route (optional)
        navigate('/components/Home');
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
    // Your login logic here
    console.log('Logged in successfully!'); // Replace with your actual login logic
  };

  const navigate = useNavigate();

  const handleSignUp = () => {
    // Navigate to the SignupPage
    navigate('/signup');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {/* <label htmlFor="username">Username:</label> */}
        <input
          type="text"
          placeholder='Username'
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <label htmlFor="password">Password:</label> */}
        <input
          type="password"
          placeholder='Password'
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button onClick={handleSignUp}>Sign up</button></p>
    </div>
  );
}

export default LoginPage;
