import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch:false,
        movieNames: null,
        movieResults: null,
    },
    reducers:{
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        toggleHamburgerMenu: (state) => {
            state.showMenu = !state.showMenu;
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    },
});

export const { toggleGptSearchView, addGptMovieResult, toggleHamburgerMenu } =
  gptSlice.actions;
export default gptSlice.reducer;