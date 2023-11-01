import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img src='./assets/background.jpg' alt='backgroundimg' />
      </div>
      <form className='absolute text-white px-12 py-8 bg-black my-20 mx-auto right-0 left-0 w-1/3 text-center rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 text-start'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input 
          type='text'
          placeholder='Full Name'
          className='p-4 px-4 my-2 w-full bg-gray-700'
        />

        {!isSignInForm && (
          <input 
            type='text'
            placeholder='Email Address'
            className='p-4 px-4 my-2 w-full bg-gray-700'
          />
        )}

        <input 
          type='text'
          placeholder='Email Address'
          className='p-4 px-4 my-2 w-full bg-gray-700'
        />
        <button 
         className='p-4 my-6 bg-red-700 w-full rounded-lg'>
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