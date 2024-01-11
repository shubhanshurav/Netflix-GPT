import React from 'react';
import { Link } from 'react-router-dom';

const MovieHeadings = () => {
  return (
    <div>
        <ul className='flex flex-row gap-6 text-white items-center text-lg font-light'>
            <Link to="/browse" className='border-b pb[2px] hover:border-b-4 border-red-600 hover:text-white hover:text-opacity-70'>
                <li>Home</li>
            </Link>

            <Link to="/nowplayingmovies" className='border-b pb-[2px] hover:border-b-4 border-red-600 hover:text-white hover:text-opacity-70'>
                <li>Now Playing </li>
            </Link>

            <Link to="/popularmovies" className='border-b pb-[2px] hover:border-b-4 border-red-600 hover:text-white hover:text-opacity-70'>
                <li>Popular</li>
            </Link>

            <Link to="/topratedmovies" className='border-b pb-[2px] hover:border-b-4 border-red-600 hover:text-white hover:text-opacity-70'>
                <li>Top Rated</li>
            </Link>

            <Link to="/trendingmovies" className='border-b pb-[2px] hover:border-b-4 border-red-600 hover:text-white hover:text-opacity-70'>
                <li>Trending</li>
            </Link>

            <Link to="/upcomingmovies" className='border-b pb-[2px] hover:border-b-4 border-red-600 hover:text-white hover:text-opacity-70'>
                <li>Upcoming</li>
            </Link>
        </ul>
    </div>
  )
}

export default MovieHeadings;
