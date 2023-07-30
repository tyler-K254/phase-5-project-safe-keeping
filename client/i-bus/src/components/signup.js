import React, { useState } from 'react';

function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    // Add other signup fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Your signup logic here
    console.log('Signup form submitted:', formData); // Replace with your actual signup logic
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignupSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        {/* Add other signup form fields as needed */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
