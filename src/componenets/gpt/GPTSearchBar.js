import React, { useRef } from 'react';
import lang from '../../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../../utils/openai';
import { API_OPTIONS } from '../../utils/constants';
import { addGptMovieResult } from '../../redux/slices/gptSlice';

const GPTSearchBar = () => {

  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
       movie + 
      "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    // console.log(json.results);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //  console.log(searchText.current.value);
     //make an API call to GPT AI and get Movie results

     const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
                       searchText.current.value + 
                      ". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholey, Pathan, Golmaal, Koi Mil Gaya";
     const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices){
      // TODO: Handle error here
    }

    // console.log(gptResults.choices?.[0]?.message?.content);
    
    //this will Contains 5 five movies result
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");  //split() -> seperate the each movie with comma(,) -> Make the array of movies

    // For each movie I will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    
    // console.log(tmdbResults);

    dispatch(
      addGptMovieResult({
        movieNames: gptMovies, 
        movieResults: tmdbResults
      })
    );

  };

  return (
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
        <form 
          className='w-full md:w-1/2 bg-black grid grid-cols-12' 
          onSubmit={(e) => e.preventDefault()} 
        >
            <input 
              ref={searchText}
              type='text' 
              className='col-span-9 p-2 m-4' 
              placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button 
             className='col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg'
             onClick={handleGptSearchClick}
            >
            {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GPTSearchBar;