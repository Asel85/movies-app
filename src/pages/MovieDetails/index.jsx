import React from 'react'
import styles from "./MovieDetails.module.scss";
import { useParams } from 'react-router-dom';

const MovieDetails = () => {

    const {id} = useParams();
  return (
    <div>
      <h2>Dettagli film ID = {id}</h2>
    </div>
  )
}

export default MovieDetails
