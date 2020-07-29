import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import DisplayResult from './DisplayResult.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      searchResults: []
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.searchResultsRender = this.searchResultsRender.bind(this);
  }

  updateSearch (event) {
    this.setState({
      searchString: event.target.value
    })
  }

  submitSearch (event) {
    event.preventDefault();
    axios.get(`/events?q=${this.state.searchString}`)
      .then(response => {
        this.setState({
          searchResults: response,
          searchString: ''
        });
      })
      .catch(error => console.log('ERROR - ', error));
  }

  searchResultsRender() {
    if (this.searchResults.length === 0) {
      return <p>Time for a new search!</p>
    } else {
      return (
        this.searchResults.map(record => <DisplayResult record={record} />)
      );
    }
  }

  render () {
    return (
      <div>
        <div>
          <SearchBar updateSearch={this.updateSearch} submitSearch={this.submitSearch} />
        </div>
        <div>
          {searchResultsRender()}
        </div>
      </div>
    );
  };
}

export default App;
