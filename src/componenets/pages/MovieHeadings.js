import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleHamburgerMenu } from '../../redux/slices/gptSlice';

const MovieHeadings = ({ direction = "row" }) => {

  // const dispatch = useDispatch();

  //   const toggleDropdown = () => {
  //   dispatch(toggleHamburgerMenu());
  // };

  return (
    <div>
      <ul
        className={`flex gap-3 md:gap-4 text-gray-200 items-start text-md font-semibold ${
          direction === "col" ? "flex-col" : "flex-row"
        }`}
      >
        <Link
          to="/browse/nowplayingmovies"
          className="hover:text-gray-400"
          // onClick={toggleDropdown}
        >
          <li>Now Playing </li>
        </Link>

        <Link
          to="/browse/popularmovies"
          className="hover:text-gray-400"
          // onClick={toggleDropdown}
        >
          <li>Popular</li>
        </Link>

        <Link
          to="/browse/topratedmovies"
          className="hover:text-gray-400"
          // onClick={toggleDropdown}
        >
          <li>Top Rated</li>
        </Link>

        <Link
          to="/browse/trendingmovies"
          className="hover:text-gray-400"
          // onClick={toggleDropdown}
        >
          <li>Trending</li>
        </Link>

        <Link
          to="/browse/upcomingmovies"
          className="hover:text-gray-400"
          // onClick={toggleDropdown}
        >
          <li>Upcoming</li>
        </Link>
      </ul>
    </div>
  );
};

export default MovieHeadings;
