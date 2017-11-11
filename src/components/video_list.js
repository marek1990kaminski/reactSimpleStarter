import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map(/*this videos here is the same one that is passed to the callback in YTSearch*/
        (video) => { /*this video here is a slot of a videos array. Each slot is an object*/
            return (
                <VideoListItem
                    onVideoSelect={props.onVideoSelect /*its a function*/}
                    key={video.etag}
                    video={video}/>
            );
        }
    );

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;