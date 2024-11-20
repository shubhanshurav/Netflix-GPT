import React, { useEffect } from "react";
import { toggleGptSearchView } from "../../redux/slices/gptSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../redux/slices/userSlice";
import { changeLanguages } from "../../redux/slices/configSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../../utils/constants";
import MovieHeadings from "./MovieHeadings";
import MenuBar from "./MenuBar";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const isLoginPage = location.pathname === "/login";
  // const isNowPlayingMovies = location.pathname !== "/nowplayingmovies";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user)
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        if (!isLoginPage) navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [dispatch, isLoginPage, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguages(e.target.value));
  };

  return (
    <div className="absolute w-screen px-3 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <div className="flex w-full justify-between items-center text-start">
        <Link to="/browse">
          <img src={LOGO} alt="Netflix logo" className="w-36 h-full md:w-44" />
        </Link>
        {isLoginPage && (
          <div className="px-4">
            <Link to="/">
              <button className="bg-red-600 text-white px-2 md:px-4 py-2 text-sm md:text-lg rounded-md">
                Started Page
              </button>
            </Link>
          </div>
        )}
        {user && (
          <div className="hidden md:block">
            <MovieHeadings direction="row" />
          </div>
        )}

        {user && (
          <button
            className="font-semibold px-2 py-1 mx-2 text-md bg-black bg-opacity-50 border-2 w-28 md:w-38 text-white rounded-sm hover:border-white hover:bg-red-700"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
        )}
      </div>
      {user && (
        <div className="flex items-center gap-4 p-4">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <MenuBar />
        </div>
      )}
    </div>
  );
};

export default Header;
