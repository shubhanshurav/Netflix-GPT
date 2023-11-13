import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { useLocation } from 'react-router-dom';


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const location = useLocation();

  // Check if the current location is the watch page
  const isWatchPage = location.pathname.includes("/browse/watch");

  // console.log(movies);
  return (
    <div className={`bg-black ${isWatchPage ? '' : 'mt-0 md:-mt-52'}`} >
      <div className=' pl-3 md:pl-12 relative z-20 m-auto'>
         <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
         <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
         <MovieList title={"Trending"} movies={movies.trendingMovies} />
         <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
         <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;