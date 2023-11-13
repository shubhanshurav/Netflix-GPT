import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import GPTPageSearch from './gpt/GPTPageSearch';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

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
           <GPTPageSearch />
        ) : (
          <>
          {/* // if GptSearch is false than show */}

              <Outlet /> 
             {/* <MainContainer /> */}
             {/* <WatchPage /> */}
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