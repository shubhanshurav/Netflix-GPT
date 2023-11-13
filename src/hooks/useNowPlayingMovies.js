import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../redux/slices/moviesSlice';
// import useMovieTrailer from './useMovieTrailer';

const useNowPlayingMovies = () => {
    // Ftech data from TMDB API and update store
    const dispatch = useDispatch();

    //agar store me already movie hai to ham again api cal nhi krenge -> known as Memoization
    const nowPlayingMovies = useSelector(
        (store) => store.movies?.nowPlayingMovies
    );
    
    const getNowPlayingMovies = async () =>{
        try{
            const data = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?US&page=2', API_OPTIONS
            );
        
            const json = await data.json();
            //  console.log(json.results);
            dispatch(addNowPlayingMovies(json.results));
        }catch(error){
            console.error("There is something wrong,please try again!!")
        }
     }
    
     useEffect(() => {
        // reduce the api call
        !nowPlayingMovies && getNowPlayingMovies();
        // if(!nowPlayingMovies) getNowPlayingMovies();
     },[]);
 
}

export default useNowPlayingMovies;