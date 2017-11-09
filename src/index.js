import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCeFsbPfSx5sJG2kuwiyqhWyzOSHJVRJps';

//Create a new component. This component is gonna produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

//Take this components generated HTML and pud it on the page (in the DOM)

var $container = document.querySelector('.container');

ReactDOM.render(<App/>, $container);