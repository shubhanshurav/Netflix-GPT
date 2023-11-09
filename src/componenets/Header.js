import React, { useEffect}  from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from '../utils/userSlice';
import {useDispatch} from 'react-redux';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { FaSignOutAlt } from 'react-icons/fa';
import {changeLanguages} from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
    //Toggle GPT Search Button
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    //change the languages
    // console.log(e.target.value);
    dispatch(changeLanguages(e.target.value));
  }

  return (
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img 
        src={LOGO}
        alt="Netflixlogo" 
        className='w-44 mx-auto md:mx-0'
      />
      {user && 
        <div className='flex p-4 items-center gap-3'>
          {/* see languagechange option when showGptSearch is true */}
          {showGptSearch && (
            <select 
              className='p-2 m-2 bg-gray-900 text-white' 
              onChange={handleLanguageChange} 
            >
              {SUPPORTED_LANGUAGES.map((lang) =>(
                  <option key={lang.identifier} value={lang.identifier} >
                    {lang.name}
                  </option>
              ))}
            </select>
          )}
          <button 
            className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
            onClick={handleGptSearchClick}
          >
            {/* if showGptSearch is true than than show homepage otherwise show GptSearch  */}
           {showGptSearch ? "Home" : "GPT Search" }
          </button>
          <img 
           src={user.photoURL}
           alt='Logoutimg' 
           className='w-11 h-11 rounded-full'
          />
          <button
           className='text-white font-bold text-3xl'
           onClick={handleSignOut}
          >
            <FaSignOutAlt />
          </button>
        </div>
      }
    </div>
  )
}

export default Header;