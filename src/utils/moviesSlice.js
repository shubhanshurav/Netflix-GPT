import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        trailerVideo: null,
        trailerVideo: null,
        popularMovies: null,
    },
    reducers:{
        addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload;
        },
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
    }
}); 

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;