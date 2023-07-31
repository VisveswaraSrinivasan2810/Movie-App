    import React, { useEffect } from 'react'
    import './MovieDetail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieorShowDetail, getSelectedMovieOrShow, removeSelectedMovieorShow } from '../../features/movies/movieSlice';

    const MovieDetail = () => {
      const {imdbID} = useParams();
      const dispatch = useDispatch();
      const data=useSelector(getSelectedMovieOrShow);
      console.log(data);
      useEffect(()=>{
         dispatch(fetchAsyncMovieorShowDetail(imdbID));
         return ()=>{
          dispatch(removeSelectedMovieorShow());
         } 
      },[dispatch,imdbID])
      return (
        <div className='movie-section'>
          {Object.keys(data).length===0 ? (<div>...Loading</div>) :
          (
          <>
          <div className='section-left'>
            <div className='movie-title'>{data.Title}</div>
            <div className='movie-rating'>
                  <span>IMDB Rating 
                  <i class="fa-solid fa-star"></i> : {data.imdbRating}
                  </span>
                  <span>IMDB Votes 
                  <i class="fa-solid fa-thumbs-up"></i>  : {data.imdbVotes}
                  </span>
                  <span>Runtime
                  <i class="fa-solid fa-clock"></i>  :  {data.Runtime}
                  </span>
                  <span>Year 
                  <i class="fa-solid fa-calendar"></i>  : {data.Year}
                  </span>
            </div>
            <div className='movie-plot'>
              {data.Plot}
            </div>
            <div className='movie-info'>
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genre</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className='section-right'>
            <img src={data.Poster} alt={data.Title} />
          </div>
          </>
          )}
        </div>
      )
    }
    
    export default MovieDetail;