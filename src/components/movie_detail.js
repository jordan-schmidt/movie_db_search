import React from 'react';

const IMG_URL = 'https://image.tmdb.org/t/p/'
const IMG_SIZE = '640'

// Takes movie from App component and displays information
const MovieDetail = ({movie}) => {
  if (!movie) {
    return <div>Search for a movie.</div>
  }

  //TODO: handle poster path of null
  const posterPath = movie.poster_path;
  const title = movie.original_title;

  return (
    <img src={`${IMG_URL}/w${IMG_SIZE}/${posterPath}`} alt={title}/>
  );

}

export default MovieDetail;
