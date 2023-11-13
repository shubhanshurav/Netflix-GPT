import React from 'react';
import { Link } from 'react-router-dom';

const MovieHeadings = () => {
  return (
    <div>
        <ul className='flex flex-row gap-6 text-white items-center text-lg font-light'>
            <Link to="/browse" className='border-b-2 border-red-600'>
                <li>Home</li>
            </Link>

            <Link to="/nowplayingmovies" className='border-b-2 border-red-600'>
                <li>Now Playing </li>
            </Link>

            <Link to="/popularmovies" className='border-b-2 border-red-600'>
                <li>Popular</li>
            </Link>

            <Link to="/topratedmovies" className='border-b-2 border-red-600'>
                <li>Top Rated</li>
            </Link>

            <Link to="/trendingmovies" className='border-b-2 border-red-600'>
                <li>Trending</li>
            </Link>

            <Link to="upcomingmovies" className='border-b-2 border-red-600'>
                <li>Upcoming</li>
            </Link>
        </ul>
    </div>
  )
}

export default MovieHeadings;