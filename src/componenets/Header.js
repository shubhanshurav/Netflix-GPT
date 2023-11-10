import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../redux/slices/gptSlice";
import { FaSignOutAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { changeLanguages } from "../redux/slices/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const isLoginPage = location.pathname === "/login";
  const isStartedPage = location.pathname === "/";

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // user is signout successfully
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT Search Button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    //change the languages
    // console.log(e.target.value);
    dispatch(changeLanguages(e.target.value));
  };

  const handleDropDown = () => {
    setIsDropdownClicked(!isDropdownClicked);
  };

  return (
    <div className="absolute px-4 md:px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <div className="flex w-full justify-between items-center text-start">
        <img
          src={LOGO}
          alt="Netflixlogo"
          className="w-32 h-full md:w-44 mx-auto md:mx-0"
        />
        {isLoginPage && (
          <div className="">
            <Link to="/">
              <button
                className="bg-red-600 text-white px-2 md:px-4 py-2 text-sm md:text-lg rounded-md"
                type="button"
              >
                Started Page
              </button>
            </Link>
          </div>
        )}
         {/* {user && <HeaderList />} */}
      </div>
      {user && (
        <div className="flex p-4 items-center gap-4">
          {/* see languagechange option when showGptSearch is true */}
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          
          <div className="flex flex-col w-36 z-40">
            <div className="flex items-center m-auto">
              <img
                src={user?.photoURL}
                alt="userImg"
                className="w-10 h-10 mb-2 cursor-pointer rounded-md"
              />
              <span
                className="text-white cursor-pointer pl-5 text-4xl"
                onClick={handleDropDown}
              >
               <GiHamburgerMenu />
              </span>
            </div>
            {isDropdownClicked && (
              <div className="bg-black m-auto bg-opacity-80 px-2 py-2">
                {/* <h1 className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl hover:text-red-600">
                  {user.displayName}
                </h1> */}
                <button
                  className="font-bold p-2 mx-2 text-md text-opacity-60 text-start w-full m-auto text-white hover:text-red-600"
                  onClick={handleGptSearchClick}
                >
                  {/* if showGptSearch is true than than show homepage otherwise show GptSearch  */}
                  {showGptSearch ? "Home" : "GPT Search"}
                </button>
                <button
                  className='flex items-center px-4 gap-2 text-start text-white font-bold text-md text-opacity-60 py-2 hover:text-red-600'
                  onClick={handleSignOut}
                 >
                    <span>Sign Out</span> <FaSignOutAlt />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
