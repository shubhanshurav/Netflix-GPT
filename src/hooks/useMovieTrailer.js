import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../redux/slices/moviesSlice';
import { useEffect, useState } from 'react';

const useMovieTrailer = (movieId) => {
    const trailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const dispatch = useDispatch();

    // Use a local state to store the trailer video
    const [trailerVideo, setTrailerVideo] = useState(null);

    const getMovieTrailer = async () => {
        try{ 
            const data = await fetch(
                trailerUrl,
                API_OPTIONS
            );
            const json = await data.json();
console.log(json)
            // Handle the case where there is no trailer
            const filterData = json.results.filter((video) => video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : null;

            // Update the local state and dispatch to Redux
            setTrailerVideo(trailer);
            // console.log(trailer);
            dispatch(addTrailerVideo(trailer));
        }catch(error){
            console.error("There is something wrong,please try again!!")
        }
    };

    useEffect(() => {
        // Fetch the trailer initially when the component mounts
        if(movieId){
            getMovieTrailer();
        }

    }, [dispatch, movieId]);

    return trailerVideo;
};

export default useMovieTrailer;
