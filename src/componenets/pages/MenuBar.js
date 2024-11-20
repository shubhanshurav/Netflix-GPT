import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import { removeUser } from "../../redux/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { toggleHamburgerMenu } from "../../redux/slices/gptSlice";
import { signOut } from "firebase/auth";
import MovieHeadings from "./MovieHeadings";

const MenuBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showMenu = useSelector((store) => store.gpt.showMenu);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.error("Error during sign-out:", error);
      navigate("/error");
    }
  };

  const toggleDropdown = () => {
    dispatch(toggleHamburgerMenu());
  };

  return (
    <div className="relative ">
      <div className="flex items-center">
        <img
          src={user?.photoURL || "/default-avatar.png"}
          alt="User Avatar"
          className="w-10 h-10 rounded-md cursor-pointer"
        />
        <RiArrowDropDownLine
          className="text-red-600 text-4xl cursor-pointer"
          onClick={toggleDropdown}
        />
      </div>
      
      {showMenu && (
        <div className="absolute top-14 right-0 bg-[crimson] bg-opacity-90 rounded-b-xl px-4 w-36 py-2">
          <div className="space-y-2">
            <MovieHeadings direction="col" />
          </div>
          <button
            className="font-semibold pt-2 text-md text-white hover:text-gray-300"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuBar;