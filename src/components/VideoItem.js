import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {

    return (
        //we use the arrow function for onVideoSelect and pass in the individual video object which gets sent back up to
        //VideoList then App where it gets passed as the argument in the onVideoSelect definition
        <div className="video-item item" onClick={ () => onVideoSelect(video) } >
        <img
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
        />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
        );
};

export default VideoItem;