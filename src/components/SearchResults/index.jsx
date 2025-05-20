import React, { useEffect, useState } from 'react'
import styles from "./SearchResults.module.scss";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from '../MovieCard';

const SearchResults = () => {

  const {query} = useParams();
  const [results, setResults] = useState([]);

  useEffect(()=>{
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              language: "it-IT",
              query: query,
            },
          }
        );
         console.log(response)
        setResults(response.data.results);
      } catch (error) {
        console.error("Errore nella ricerca:", error);
      }
    };

    fetchMovies();
  },[query]);
  return (
    <div className={styles.movieList}>
      {results.map((movie)=>(
       <MovieCard movie={movie} /> 
      ))}
    </div>
  )
}

export default SearchResults
