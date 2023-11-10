import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../../utils/constants';

const GPTPageSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img src={BG_URL} alt='backgroundimg' className='h-screen md:h-full object-cover' />
      </div>
      <div className=''>
          <GPTSearchBar />
          <GptMovieSuggestions />
      </div>
    </div>
  )
}

export default GPTPageSearch;