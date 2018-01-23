import React, { Component } from 'react';
import fetch from 'node-fetch';
import './App.css';

import SearchBar from './search_bar'

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

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
