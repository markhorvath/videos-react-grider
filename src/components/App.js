import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube.js';

class App extends React.Component {
  onTermSubmit = (term) => {
    //testing that the prop to the child component (SearchBar) callback (onFormSubmit) gets correctly sent back (this.props.onTermSubmit(this.state.term)) to the parent
    console.log(term);

    youtube.get('/search', {
      params: {
        q: term
      }
    })
  };
  //remember the prop you pass to the component can be called anything
  render() {
    return (
      <div className="ui container">
      <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  };
};


export default App;
