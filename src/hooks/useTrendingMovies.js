
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/moviesSlice';

const useTrendingMovies = () => {
    // Ftech data from TMDB API and update store
     const dispatch = useDispatch();
    
     const getTrendingMovies = async () =>{
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS
            );
    
         const json = await data.json();
        //  console.log(json.results);
         dispatch(addTrendingMovies(json.results));
     }
    
     useEffect(() => {
        getTrendingMovies();
     },[]);
 
}

export default useTrendingMovies;