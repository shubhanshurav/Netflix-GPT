import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }

  const email= useRef(null);
  const password= useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);  
    // console.log(message);
    setErrorMessage(message);
  }

  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img src='./assets/background.jpg' alt='backgroundimg' />
      </div>
      <form 
        onSubmit={(e) => e.preventDefault()} 
        className='absolute text-white px-12 py-8 bg-black my-20 mx-auto right-0 left-0 w-1/3 text-center rounded-lg bg-opacity-80'
      >
        <h1 className='font-bold text-3xl py-4 text-start'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input 
            type='text'
            placeholder='Full Name'
            className='p-4 px-4 my-2 w-full bg-gray-700'
          />
        )}

        <input 
          ref = {email}
          type='email'
          placeholder='Email Address'
          className='p-4 px-4 my-2 w-full bg-gray-700'
        />

        <input 
          ref = {password}
          type='password'
          placeholder='Enter Password'
          className='p-4 px-4 my-2 w-full bg-gray-700'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button 
         className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
           {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 text-start cursor-pointer' onClick={toggleSignIn}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login;