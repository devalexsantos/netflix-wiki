import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MovieItem = ()=> {
  const API_BASE = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');

  let { name } = useParams();

  useEffect(()=> {
    getMovie();
  },[])

  function getMovie() {
    axios.get(`${API_BASE}${name}?api_key=${API_KEY}&language=pt-BR`)
    .then((response)=> setMovie(response.data))
    .catch((err)=> setError(err))
  }

  return(
    <div>
      <h2>{movie.title && movie.title}</h2>
      <p>{movie.overview && movie.overview}</p>
      <h2>{!movie.title && "Este filme ainda não título cadastrado no IMDB"}</h2>
      <p>{!movie.overview && "Este filme ainda não tem descrição cadastrada no IMDB"}</p>
    </div>
  )
}

export default MovieItem;