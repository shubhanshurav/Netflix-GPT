import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({title, movies}) => {
  //  console.log(movies);

  return (
    <div className='px-4'>
        <h1 className='text-lg md:text-2xl text-white py-3 border-b-4 border-red-600 w-fit mb-4'>{title} </h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
               {movies && movies?.map((movie) => (
                  <Link key={movie.id} to={"/browse/watch?v=" + movie?.id} >
                    <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
                  </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MovieList;