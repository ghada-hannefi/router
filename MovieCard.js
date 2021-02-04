import React from 'react';
import{Link } from'react-router-dom';


import Rate from '../Rate';

import './MovieCard.css';


const MovieCard = ({
  movie: { name, date, rating, image, type}
}) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src={image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{date}</li>
            <li>||</li>
            <li>{type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={rating} />
        </div>
        <div className="card_right__button">
        <Link to="https://www.imdb.com/?ref_=nv_home">WATCH TRAILER</Link>

        </div>
        <div className="card_right__review">
      <Link to="https://www.imdb.com/?ref_=nv_home">Description</Link>
      </div>
        

      
  
      </div>
    </div>
  );
};

export default MovieCard;