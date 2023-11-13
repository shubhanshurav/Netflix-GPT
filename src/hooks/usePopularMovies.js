
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../redux/slices/moviesSlice';

const usePopularMovies = () => {
    // Ftech data from TMDB API and update store
     const dispatch = useDispatch();

    //agar store me already movie hai to ham again api cal nhi krenge -> known as Memoization
    const popularMovies = useSelector(
        (store) => store.movies?.popularMovies
    );
    
     const getPopularMovies = async () =>{

        try{
            const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?page=2', API_OPTIONS
            );
       
            const json = await data.json();
           //  console.log(json.results);
            dispatch(addPopularMovies(json.results));    
        }catch(error){
            console.error("There is something wrong,please try again!!")
        }
     }
    
     useEffect(() => {
        // reduce the api call
        !popularMovies && getPopularMovies();
     },[]);
 
}

export default usePopularMovies;