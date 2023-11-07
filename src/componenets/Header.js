import React, { useEffect}  from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from '../utils/userSlice';
import {useDispatch} from 'react-redux';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(
            addUser({
                uid:uid, 
                email:email, 
                displayName: displayName, 
                photoURL:photoURL,
            })
          );
           navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  },[]);

  const handleGptSearchClick = () => {
    //TOggle GPT Search Button
    dispatch(toggleGptSearchView());
  }

  return (
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        src={LOGO}
        alt="Netflixlogo" 
        className='w-44'
      />
      {user && <div className='flex p-4 items-center gap-3'>
          <button 
            className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img 
           src={user.photoURL}
           alt='Logoutimg' 
           className='w-11 h-11 rounded-full'
          />
          <button
           className='text-white font-bold'
           onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      }
    </div>
  )
}

export default Header;