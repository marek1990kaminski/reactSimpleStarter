import React, {Component} from 'react';

//const Component = React.Component;

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: 'Starting Value'};
    }

    render() {
        return (
            <div>
                <input
                    value = {this.state.term}
                    onChange={(event) => this.setState({term: event.target.value})}/>
                {/*Value of the input: {this.state.term}*/}
            </div>
        );
    }
}

export default SearchBar;
