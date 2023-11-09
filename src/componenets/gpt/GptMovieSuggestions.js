import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from "../MovieList";

const GptMovieSuggestions = () => {

  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if(!movieNames) return null; //Show shimmer ui( spinner ) in place of null

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
       <div>
          <h1>{movieNames[0]}</h1>
          {movieNames.map((movieName, index) => {
            <MovieList 
              key={movieName} 
              title={movieName} 
              movies={movieResults[index]} 
            />
          })}
       </div>
    </div>
  )
} 

export default GptMovieSuggestions;