import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <div className='container'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </div>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
