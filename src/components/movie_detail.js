import React from 'react';

const IMG_URL = 'https://image.tmdb.org/t/p/'
// valid values for poster size w92, w154, w185, w342, w500, w780, 'original'
const POSTER_SIZE = 'w342'
const BACKDROP_SIZE = 'w1400_and_h450_face'

// Takes movie from App component and displays information
const MovieDetail = ({movie}) => {
  if (!movie) {
    return <div>Search for a movie.</div>
  }

  const title = movie.original_title;
  //TODO: handle poster path of null
  const posterPath = `${IMG_URL}${POSTER_SIZE}${movie.poster_path}`
  const backdropPath = `${IMG_URL}${BACKDROP_SIZE}${movie.backdrop_path}`

  return (
    <div>
      <div className="movie_bg" style={ {backgroundImage: `url(${backdropPath})`} }>
      </div>
      <img src={posterPath} alt={title}/>
    </div>
  );

}

export default MovieDetail;
