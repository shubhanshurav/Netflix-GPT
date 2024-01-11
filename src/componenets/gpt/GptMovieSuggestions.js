import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from "../MovieList";
// import { IMD_CDN_URL } from '../../utils/constants';

const GptMovieSuggestions = () => {

  const { movieResults, movieNames} = useSelector((store) => store.gpt);
  if(!movieNames) return null; //Show shimmer ui( spinner ) in place of null
  
  // console.log(movieResults[1][0].poster_path);
  // console.log("Movies - ", movieResults);
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
       <div>
          {/* <img src={IMD_CDN_URL + movieResults[0][0].poster_path} alt='movie' /> */}
          {movieNames.map((movieName, index) => (
            <MovieList 
              key={movieName} 
              title={movieName} 
              movies={movieResults[index]} 
            />
          ))}
       </div>
    </div>
  )
} 

export default GptMovieSuggestions;