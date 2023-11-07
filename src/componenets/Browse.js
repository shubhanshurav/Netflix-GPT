import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import GPTSearch from './GPTPageSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          // if GptSearch is true than show
           <GPTSearch />
        ) : (
          // if GptSearch is false than show
           <>
             <MainContainer />
             <SecondaryContainer />
           </>
        )
      }


      {/*
          MainContainer
          - VideoBackground
          - VideoTitle
          SecondaryContainer
          - MovieList * n
          - cards * n
      */}

    </div>
  )
}

export default Browse;