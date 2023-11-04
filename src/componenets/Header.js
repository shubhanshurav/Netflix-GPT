import React, { useEffect}  from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from '../utils/userSlice';
import {useDispatch} from 'react-redux';
import { LOGO } from '../utils/constants';

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

  return (
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        src={LOGO}
        alt="Netflixlogo" 
        className='w-44'
      />
      {user && <div className='flex p-2 items-center gap-1'>
          <img 
          src={user.photoURL}
          alt='Logoutimg' 
          className='w-11 h-11'
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