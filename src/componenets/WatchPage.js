import React from "react";
import { useSearchParams } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const WatchPage = () => {
   
  const [searchParams] = useSearchParams();  //HW -> Read more about useSearchParams
  const movieId = searchParams.get('v')
//   const title = searchParams.get('title')
//   console.log(title);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
        <div className="bg-black pb-5 pt-20 md:pt-24">
            <div className="w-fit m-auto"> 
                <iframe
                    className="w-screen md:w-[1200px] h-fit md:h-[500px] border shodow-lg border-gray-500 aspect-video"
                    src={
                        "https://www.youtube.com/embed/" +
                        trailerVideo?.key +
                        "?&autoplay=1"
                    }
                    // src={"https://www.youtube.com/embed/" + searchParams.get('v')}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                >
                </iframe>
                <div className="bg-black">
                   <h1 className=" border-b border-l border-r text-white py-4 px-2 md:pl-5 text-md md:text-2xl font-light"> {trailerVideo.name}</h1>
                </div>
            </div>
        </div>
  );
};

export default WatchPage;