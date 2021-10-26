import React from 'react';
import './MovieRow.css';
import { Link } from 'react-router-dom';

const MovieRow = ({title, items})=> {
  return(
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 && items.results.map((item, key)=> (
            <div key={key} className="movieRow--item">
              <Link to={`/movie/${item.id}`}>
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow;
