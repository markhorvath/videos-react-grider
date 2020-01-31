import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube.js';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    //testing that the prop to the child component (SearchBar) callback (onFormSubmit) gets correctly sent back (this.props.onTermSubmit(this.state.term)) to the parent
    console.log(term);

    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  //remember the prop you pass to the component can be called anything
  render() {
    return (
      <div className="ui container">
      <SearchBar onTermSubmit={this.onTermSubmit} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  };
};


export default App;
