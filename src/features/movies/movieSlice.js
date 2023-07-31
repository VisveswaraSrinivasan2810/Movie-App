import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async (term)=>{
    const response =  await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
    return response.data;
});

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries',async (term)=>{
    const response =  await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);
    return response.data;
});

export const fetchAsyncMovieorShowDetail = createAsyncThunk('movies/fetchAsyncMovieorShowDetail ',async (id)=>{
    const response =  await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
});

const initialState = {
     movies : {},
     series :{},
     selectMovieorShow :{},
};


const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
        removeSelectedMovieorShow : (state)=>{
              state.selectMovieorShow={};
        }
    },
    extraReducers : {
        [fetchAsyncMovies.pending] : ()=>{
            console.log("Pending");
        } ,
        [fetchAsyncMovies.fulfilled] : (state,{payload})=>{
            console.log("Fetched Successfully");
            return {...state,movies : payload};
        } ,
        [fetchAsyncMovies.rejected] : () =>{
            console.log("Rejected");
        },
        [fetchAsyncSeries.fulfilled] : (state,{payload})=>{
            console.log("Successfully fetced");
            return {...state,series :payload};
        },
        [fetchAsyncMovieorShowDetail.fulfilled] : (state,{payload})=>{
            console.log("Successfully fetced");
            return {...state,selectMovieorShow:payload};
        }
    }
});

export const {removeSelectedMovieorShow}=movieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies;
export const getAllSeries =(state)=>state.movies.series;
export const getSelectedMovieOrShow =(state)=>state.movies.selectMovieorShow;
export default movieSlice.reducer;