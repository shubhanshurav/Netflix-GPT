import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    //agar store me already movie hai to ham again api cal nhi krenge -> known as Memoization
    const trailerVideo = useSelector(
        (store) => store.movies?.trailerVideo
    );

    //fetch trailer video & updating the store with trailer video data
    const getMovieTrailer= async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
            API_OPTIONS
            );

        const json = await data.json();
        // const trailer = json.results.filter((video) => video.name === "Final Trailer");

        /** 
         * suppose agar kisi video me trailer nhi hai to ham kisi or video ko 
         * consider krke background me show kra denge 
         * isi case ko handle krne ke liye hamne filterData.length ka use kiye 
         * agar length 0 hai to json.results me se 1st video ko show kra denge otherwise trailer video ko
        */
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
       // reduce the api call
       !trailerVideo && getMovieTrailer();
    },[]);
};

export default useMovieTrailer;