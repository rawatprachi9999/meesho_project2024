import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignInUp.css'

const SignIn = ({ onSignInComplete }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    
    // Replace the following with your actual authentication logic
    if (email === 'user@example.com' && password === 'password') {
      onSignInComplete(true); // Assuming `onSignInComplete` sets the user as signed in
      navigate('/'); // Redirect to homepage after successful sign-in
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignIn}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn-signin">Sign In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
