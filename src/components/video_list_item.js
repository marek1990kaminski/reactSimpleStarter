import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    /*const video = props.video;*///this is used so we don't have to use (props) as the argument and then assign ccnst video to props video
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;