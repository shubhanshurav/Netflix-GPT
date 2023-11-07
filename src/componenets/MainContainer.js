import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.trendingMovies);

    //this is called Early return
    // if(movies == null) return;
    if(!movies) return;

    const movieTrailer = movies[0];
    // console.log(movieTrailer);

    const {original_title, overview, id} = movieTrailer;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}  />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer;