
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../redux/slices/moviesSlice';

const useTopRatedMovies = () => {
    // Ftech data from TMDB API and update store
     const dispatch = useDispatch();

    //agar store me already movie hai to ham again api cal nhi krenge -> known as Memoization
    const topRatedMovies = useSelector(
        (store) => store.movies?.topRatedMovies
    );
    
     const getTopRatedMovies = async () =>{

        try{
            const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS
            );
       
            const json = await data.json();
           //  console.log(json.results);
            dispatch(addTopRatedMovies(json.results));
        }catch(error){
            console.error("There is something wrong,please try again!!")
        }
     }
    
     useEffect(() => {
        // reduce the api call
        !topRatedMovies && getTopRatedMovies();
     },[]);
 
}

export default useTopRatedMovies;