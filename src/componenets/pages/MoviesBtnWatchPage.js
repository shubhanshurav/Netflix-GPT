import React from 'react';
import WatchPage from '../WatchPage';
import { Link } from 'react-router-dom';
import MovieList from '../MovieList';
import { useSelector } from 'react-redux';

const MoviesBtnWatchPage = () => {

  const movies = useSelector((store) => store.movies);

  return (
    <div>
        <div className="flex justify-between px-6 py-2 items-center">
        <img
          src="./assets/Netflix_Logo.png"
          alt="netflixlogo"
          className="w-36 md:w-48"
        />
        <div className="">
          <Link to="/browse">
            <button
              className="bg-red-600 text-white px-4 py-2 text-lg rounded-md"
              type="button"
            >
              Home
            </button>
          </Link>
        </div>
      </div>
        <div className=''>
            <div className='-mt-20 md:-mt-24'>
              <WatchPage />
            </div>
            <div className="bg-black" >
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
                <MovieList title={"Trending"} movies={movies.trendingMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            </div>
        </div>
    </div>
  )
}

export default MoviesBtnWatchPage;