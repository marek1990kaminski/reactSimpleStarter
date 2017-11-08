import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component. This component is gonna produce some HTML
const App = () => {
    return <div>Hi!</div>;
};

//Take this components generated HTML and pud it on the page (in the DOM)

var $container = document.querySelector('.container');

ReactDOM.render(<App/>, $container);