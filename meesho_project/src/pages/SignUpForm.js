import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

function SignUpForm({ setUser }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (name && password && email) {
      const newUser = {
        name,
        email,
        password,
        cart: [] // Initialize an empty cart for the new user
      };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser); 
      navigate('/'); 
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSignUp} className="signup-form">
        <h2>Sign Up</h2>
        <div className="input-group">
          <label>Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="youremail@gmail.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div class="input-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </>
  );
}

export default SignUpForm;
