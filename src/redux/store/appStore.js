import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../../redux/slices/userSlice';
import moviesReducer from '../../redux/slices/moviesSlice';
import gptReducer from '../../redux/slices/gptSlice';
import configReducer from '../../redux/slices/configSlice';


const appStore = configureStore({
    reducer:{
       user: userReducer,
       movies: moviesReducer,
       gpt: gptReducer,
       config: configReducer,
    },
});

export default appStore;