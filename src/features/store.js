import { configureStore } from "@reduxjs/toolkit"; 
import moviesReduer from './movies/movieSlice';

export const store = configureStore(
    {
        reducer :{
            movies : moviesReduer,
        
        },
    }
);