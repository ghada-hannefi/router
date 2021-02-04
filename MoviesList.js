import React from 'react';
import{BrowserRouter,Route ,Switch} from'react-router-dom';
import trailler from'../components/MovieCard/trailler';
import description from '../components/MovieCard/description';


import MovieCard from './MovieCard/MovieCard';

const MoviesList = ({ moviesList, nameSearch, ratingSearch }) => {
  return (
    <div
      className="movies-list"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {moviesList
        .filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
         <BrowserRouter>
       
       <Switch>
       <Route exact path="https://www.imdb.com/?ref_=nv_home" component={description}/>
       <Route path="https://www.imdb.com/?ref_=nv_home" component={trailler}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
};

export default MoviesList;