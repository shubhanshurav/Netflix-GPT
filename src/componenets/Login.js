import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/userSlice';
import {BG_URL, IMAGE_URL} from '../utils/constants';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  }

  const email= useRef(null);
  const password= useRef(null);
  const name= useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(
      email.current.value, 
      password.current.value,
      name?.current?.value,
    );  
    // console.log(message);
    setErrorMessage(message);

    if(message) return;
    
    // Sign in & sign up logic
    if(!isSignInForm){
      // Sign up logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name?.current?.value, 
          photoURL: IMAGE_URL,
        }).then(() => {
          // Profile updated!
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(
            addUser({
                uid:uid, 
                email:email, 
                displayName: displayName, 
                photoURL:photoURL,
            })
          );
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
        });
         
        // console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // setErrorMessage(errorCode + "-" + errorMessage);
        setErrorMessage("Email already used");
      });
    }else{
      // Sign in logic
      signInWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // setErrorMessage(errorCode + "-" + errorMessage);
        setErrorMessage("Invalid User");
      });
    }

  }

  return ( 
    <div className=''>
      <Header />
      <div className='absolute'>
        <img src={BG_URL} alt='backgroundimg' className='h-screen md:h-full object-cover' />
      </div>
      <form 
        onSubmit={(e) => e.preventDefault()} 
        className='absolute text-white px-12 py-4 md:py-8 bg-black my-20 mx-auto right-0 left-0 w-[85%] md:w-1/3 text-center rounded-lg bg-opacity-80'
      >
        <h1 className='font-bold text-[26px] md:text-3xl py-3 md:py-4 text-start'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input 
            type='text'
            placeholder='Full Name'
            className='p-3 md:p-4 px-4 my-2 w-full bg-gray-700'
          />
        )}

        <input 
          ref = {email}
          type='email'
          placeholder='Email Address'
          className='p-3 md:p-4 px-4 my-2 w-full bg-gray-700'
        />

        <input 
          ref = {password}
          type='password'
          placeholder='Enter Password'
          className='p-3 md:p-4 px-4 my-2 w-full bg-gray-700'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button 
         className='p-3 md:p-4 my-3 md:my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
           {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-2 md:py-4 text-start cursor-pointer' onClick={toggleSignIn}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login;