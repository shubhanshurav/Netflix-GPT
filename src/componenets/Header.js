import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../redux/slices/gptSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import MovieHeadings from "./MovieHeadings";
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
        navigate("/login");
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
    <div className="absolute px-3 w-screen py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <div className="flex w-full justify-between items-center text-start">
        <Link to="/browse">
           <img src={LOGO} alt="Netflixlogo" className="w-36 h-full md:w-44" />
        </Link>
        {isLoginPage && (
          <div className="px-4">
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

        {user && (
          <div className="m-auto hidden md:block">
            <MovieHeadings />
          </div>
        )}

        {user && !showGptSearch &&(
          <div className="m-auto">
            <button
              className="font-semibold px-2 items-center py-1 mx-2 text-md text-start w-fit m-auto text-white bg-black bg-opacity-50 border-2 hover:border-white hover:bg-red-700"
              onClick={handleGptSearchClick}
            >
              {/* if showGptSearch is true than than show homepage otherwise show GptSearch  */}
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
          </div>
        )}
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

          <div className="flex flex-col w-fit md:w-36 z-40 pr-3 m-auto relative">
            <div className="flex ">
              <img
                src={user?.photoURL}
                alt="userImg"
                className="w-10 h-10 mb-2 cursor-pointer rounded-md "
              />
              <span
                className="text-red-600 cursor-pointer px-5 text-4xl"
                onClick={handleDropDown}
              >
                <GiHamburgerMenu />
              </span>
            </div>
            {isDropdownClicked && (
              <div className="bg-rose-700 m-auto bg-opacity-90 rounded-b-xl px-2 py-2 absolute top-14 right-0">
                {/* <h1 className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl hover:text-red-600">
                  {user.displayName}
                </h1> */}

                <button
                  className="font-semibold p-2 mx-4 text-md text-start w-full m-auto text-white hover:text-gray-300"
                  onClick={handleGptSearchClick}
                >
                  {/* if showGptSearch is true than than show homepage otherwise show GptSearch  */}
                  {showGptSearch ? "Home" : "GPT Search"}
                </button>

                <ul className="flex flex-col font-semibold p-2 gap-4 mx-4 text-start w-full m-auto text-white">
                  <Link to="/nowplayingmovies" className="hover:text-gray-300">
                    <li>Now Playing </li>
                  </Link>

                  <Link to="/popularmovies" className="hover:text-gray-300">
                    <li>Popular</li>
                  </Link>

                  <Link to="/topratedmovies" className="hover:text-gray-300">
                    <li>Top Rated</li>
                  </Link>

                  <Link to="/trendingmovies" className="hover:text-gray-300">
                    <li>Trending</li>
                  </Link>

                  <Link to="upcomingmovies" className="hover:text-gray-300">
                    <li>Upcoming</li>
                  </Link>
                </ul>

                <button
                  className="flex items-center px-2 mx-4 text-start text-white font-semibold text-md py-2 hover:text-gray-300"
                  onClick={handleSignOut}
                >
                  <span>Sign Out</span>
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