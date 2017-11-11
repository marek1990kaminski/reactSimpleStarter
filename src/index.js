import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCeFsbPfSx5sJG2kuwiyqhWyzOSHJVRJps';


//Create a new component (class based component). This component is gonna produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'Filthy Frank'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos: videos});
        });

    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>{/*this.state.vides is passed to the VideoList component */}
            </div>
        );
    }
};

//Take this components generated HTML and put it on the page (in the DOM)

var $container = document.querySelector('.container');

ReactDOM.render(<App/>, $container);