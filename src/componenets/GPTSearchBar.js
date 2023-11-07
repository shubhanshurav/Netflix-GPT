import React from 'react';
import lang from '../utils/languageConstants';

const GPTSearchBar = () => {
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input 
              type='text' 
              className='col-span-9 p-2 m-4' 
              placeholder={lang.hindi.gptSearchPlaceholder}
            />
            <button 
             className='col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg'
            >
            {lang.hindi.search}
            </button>
        </form>
    </div>
  )
}

export default GPTSearchBar;