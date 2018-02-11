import _ from 'lodash';
import React, { Component } from 'react';
import fetch from 'node-fetch';
import './App.css';

import SearchBar from './search_bar'
import MovieDetail from './movie_detail'

const ROOT_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      currentMovie: null
    };

    this.movieSearch('Reservoir Dogs');
  }

  movieSearch(term) {
    // Query TMDB API and set state based on returned information
    // TODO: handle when user empties search bar
    if (!term) {
      this.setState({
        movies: [],
        currentMovie: null
      });
    } else {
      let query = encodeURI(term);
      fetch(`${ROOT_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
        .then(res => res.json())
        .then(resJSON => {
          this.setState({
            movies: resJSON.results,
            currentMovie: resJSON.results[0]
          });
        });
    }
  }

  render() {
    const movieSearch = _.debounce((term) => { this.movieSearch(term) }, 300);

    return (
      <div className="App">
        <SearchBar onSearchTermChange={movieSearch}/>
        <MovieDetail movie={this.state.currentMovie}/>
      </div>
    );
  }
}

export default App;
