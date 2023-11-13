
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../redux/slices/moviesSlice';

const useUpcomingMovies = () => {
    // Ftech data from TMDB API and update store
     const dispatch = useDispatch();

    //agar store me already movie hai to ham again api cal nhi krenge -> known as Memoization
    const upComingMovies = useSelector(
        (store) => store.movies?.upComingMovies
    );

     const getUpcomingMovies = async () =>{

        try{
            const data = await fetch(
            'https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS
            );
       
            const json = await data.json();
           //  console.log(json.results);
            dispatch(addUpcomingMovies(json.results));
        }catch(error){
            console.error("There is something wrong,please try again!!")
        }
     }
    
     useEffect(() => {
        // reduce the api call
        // if trailer video is present so don't make api call
        // if trailer video is empty than make api call
        !upComingMovies && getUpcomingMovies();
     },[]);
 
}

export default useUpcomingMovies;