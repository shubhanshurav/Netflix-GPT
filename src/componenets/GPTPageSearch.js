import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GptMovieSuggestion from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GPTPageSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BG_URL} alt='backgroundimg' />
      </div>
        <GPTSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GPTPageSearch;