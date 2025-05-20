import React from 'react'
import styles from "./MovieCard.module.scss"

const MovieCard = ({movie}) => {
  return (
    <div key={movie.id} className={styles.card}>
     <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} /> 
    </div>
  )
}

export default MovieCard
