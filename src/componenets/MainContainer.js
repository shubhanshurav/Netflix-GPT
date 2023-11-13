import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
// import PlayVideo from './PlayVideo';

const MainContainer = () => { 

    const movies = useSelector((store) => store.movies?.trendingMovies);

    //this is called Early return
    // if(movies == null) return;
    if(!movies) return;

    const movieTrailerId = movies[0];
    const {original_title,overview, id} = movieTrailerId;

    // const movieTrailerId = movies.map(video => video.id);
    // console.log(movieTrailerId); 


  return (
    <div className="pt-[12%] md:pt-0 bg-black">
        <VideoTitle title={original_title} overview={overview} movieId={id} />
        <VideoBackground movieId={id} />
        {/* {movieTrailerId.map((e,index) => (
          <PlayVideo movieId={e} />
        ))} */}

    </div>
  )
}

export default MainContainer;