
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import profile from '../assets/profile.webp'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [isResetting, setIsResetting] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (isResetting) {
        const response = await axios.post(backendUrl + '/api/user/forgot-password', { email: resetEmail });
        if (response.data.success) {
          toast.success('Reset link sent to your email!');
          setIsResetting(false);
        } else {
          toast.error(response.data.message);
        }
      } else {
        if (currentState === 'Sign Up') {
          const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            toast.success('Account created successfully!');
          } else {
            toast.error(response.data.message);
          }
        } else {
          const response = await axios.post(backendUrl + '/api/user/login', { email, password });
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            toast.success('Logged in successfully!');
          } else {
            toast.error(response.data.message);
          }
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-10 gap-3 text-gray-800'>
      
      <div className='w-100 h-90 flex flex-col items-center'>

        <div className='w-80 h-100 flex justify-center mb-4'>
          <img 
            src={profile} 
            alt="Login Illustration" 
            className="w-full h-140 object-cover"
          />
        </div>

        {/* Form title */}
        <div className='inline-flex items-center gap-2 mb-3'>
          <p className='prata-regular text-2xl'>{isResetting ? 'Reset Password' : currentState}</p>
          <hr className='border-none h-[1.5px] w-6 bg-gray-800' />
        </div>

        {/* Render name input only if signing up */}
        {currentState === 'Sign Up' && !isResetting ? (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className='w-full px-2 py-1 border border-gray-800 mb-3'
            placeholder='Name'
            required
          />
        ) : null}

        {/* Email input for login/sign-up or reset password */}
        {!isResetting ? (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className='w-full px-2 py-1 border border-gray-800 mb-3'
              placeholder='Email'
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className='w-full px-2 py-1 border border-gray-800 mb-3'
              placeholder='Password'
              required
            />
          </>
        ) : (
          <input
            onChange={(e) => setResetEmail(e.target.value)}
            value={resetEmail}
            type="email"
            className='w-full px-2 py-1 border border-gray-800 mb-3'
            placeholder='Enter your email to reset password'
            required
          />
        )}
      </div>

      {/* Links to toggle between login/sign-up and forgot password */}
      <div className='w-full flex justify-between text-sm mt-[-6px]'>
        {!isResetting ? (
          <>
            <p className='cursor-pointer' onClick={() => setIsResetting(true)}>
              Forgot your password?
            </p>
            {currentState === 'Login' ? (
              <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>
                Create account
              </p>
            ) : (
              <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>
                Login Here
              </p>
            )}
          </>
        ) : (
          <p onClick={() => setIsResetting(false)} className='cursor-pointer'>
            Back to Login
          </p>
        )}
      </div>

      {/* Submit button */}
      <button className='bg-black text-white font-light px-6 py-2 mt-3'>
        {isResetting ? 'Send Reset Link' : currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
