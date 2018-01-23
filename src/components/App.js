import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

import SearchBar from './search_bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
