import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube.js';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('youtube');
  }

  onTermSubmit = async (term) => {
    //testing that the prop to the child component (SearchBar) callback (onFormSubmit) gets correctly sent back (this.props.onTermSubmit(this.state.term)) to the parent
    console.log(term);

    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  //remember the prop you pass to the component can be called anything
  render() {
    return (
      <div className="ui container">
      <SearchBar onTermSubmit={this.onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
        <div className="eleven wide column">
        <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className="five wide column">
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        </div>
        </div>
      </div>
      </div>
    );
  };
};


export default App;
