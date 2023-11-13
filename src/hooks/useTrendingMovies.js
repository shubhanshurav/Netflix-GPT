
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrendingMovies } from '../redux/slices/moviesSlice';

const useTrendingMovies = () => {
    // Ftech data from TMDB API and update store
     const dispatch = useDispatch();

    //agar store me already movie hai to ham again api cal nhi krenge -> known as Memoization
    const trendingMovies = useSelector(
      (store) => store.movies?.trendingMovies
   );
    
     const getTrendingMovies = async () =>{

         try{
            const data = await fetch(
                  'https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTIONS
                  );
         
               const json = await data.json();
            //  console.log(json.results);
               dispatch(addTrendingMovies(json.results));
         }catch(error){
            console.error("There is something wrong,please try again!!")
         }
     }
    
     useEffect(() => {
        // reduce the api call
        !trendingMovies && getTrendingMovies();
     },[]);
 
}

export default useTrendingMovies;