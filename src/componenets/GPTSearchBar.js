import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GPTSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input 
              type='text' 
              className='col-span-9 p-2 m-4' 
              placeholder={lang[langKey] .gptSearchPlaceholder}
            />
            <button 
             className='col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg'
            >
            {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GPTSearchBar;