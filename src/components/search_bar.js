import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // search term
    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    //Input is determined by state, not vice versa
    //Run movie search passed from App component
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
