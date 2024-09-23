// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = () => {

//   const [currentState, setCurrentState] = useState('Login');
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

//   const [name,setName] = useState('')
//   const [password,setPasword] = useState('')
//   const [email,setEmail] = useState('')

//   const onSubmitHandler = async (event) => {
//       event.preventDefault();
//       try {
//         if (currentState === 'Sign Up') {
          
//           const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
//           if (response.data.success) {
//             setToken(response.data.token)
//             localStorage.setItem('token',response.data.token)
//           } else {
//             toast.error(response.data.message)
//           }

//         } else {

//           const response = await axios.post(backendUrl + '/api/user/login', {email,password})
//           if (response.data.success) {
//             setToken(response.data.token)
//             localStorage.setItem('token',response.data.token)
//           } else {
//             toast.error(response.data.message)
//           }

//         }


//       } catch (error) {
//         console.log(error)
//         toast.error(error.message)
//       }
//   }

//   useEffect(()=>{
//     if (token) {
//       navigate('/')
//     }
//   },[token])

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//         <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//             <p className='prata-regular text-3xl'>{currentState}</p>
//             <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
//         </div>
//         {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
//         <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
//         <input onChange={(e)=>setPasword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
//         <div className='w-full flex justify-between text-sm mt-[-8px]'>
//             <p className=' cursor-pointer'>Forgot your password?</p>
//             {
//               currentState === 'Login' 
//               ? <p onClick={()=>setCurrentState('Sign Up')} className=' cursor-pointer'>Create account</p>
//               : <p onClick={()=>setCurrentState('Login')} className=' cursor-pointer'>Login Here</p>
//             }
//         </div>
//         <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
//     </form>
//   )
// }

// export default Login




import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [isResetting, setIsResetting] = useState(false); // State for password reset

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (isResetting) {
        // Handle forgot password request
        const response = await axios.post(backendUrl + '/api/user/forgot-password', { email: resetEmail });
        if (response.data.success) {
          toast.success('Reset link sent to your email!');
          setIsResetting(false); // Go back to the login form after reset link is sent
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
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{isResetting ? 'Reset Password' : currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {/* Render name input only if signing up */}
      {currentState === 'Sign Up' && !isResetting ? (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className='w-full px-3 py-2 border border-gray-800'
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
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Email'
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Password'
            required
          />
        </>
      ) : (
        <input
          onChange={(e) => setResetEmail(e.target.value)}
          value={resetEmail}
          type="email"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Enter your email to reset password'
          required
        />
      )}

      {/* Links to toggle between login/sign-up and forgot password */}
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
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
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {isResetting ? 'Send Reset Link' : currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
