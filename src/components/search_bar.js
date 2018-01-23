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
    this.setState({term});
    // need to pass function from App level
    // this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
