import React, { useState } from 'react'
import './Header.scss';
// import user from '../../images/man.jpg';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';
const Header = () => {
  const [term,setTerm] = useState();
  const dispatch=useDispatch();
  const submitHandler = (e) =>{
       e.preventDefault();
       if(term === "")alert("Please enter valid search term");
       dispatch(fetchAsyncMovies(term));
       dispatch(fetchAsyncSeries(term));

  }
  return (
    <div className='header'>
     <div className='logo'> <Link to='/' >V Cinema's</Link></div>
     <div className='search-bar'> 
        <form onSubmit={submitHandler}>
          <input type='search' placeholder='Search Movies or Series' value={term} onChange={(e)=>setTerm(e.target.value)}/>
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
     </div>
      {/* <div className='user-image'>
        <img src={user} alt='user'/>
      </div> */}
    </div>
  )
}

export default Header;