import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className='bg-black' >
      <div className='mt-0 md:-mt-52 pl-3 md:pl-12 relative z-20 m-auto'>
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