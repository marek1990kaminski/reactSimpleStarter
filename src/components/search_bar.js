import React, {Component} from 'react';

//const Component = React.Component;

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});//we use it, because we pass the parameter, to assign it as the value to the key - term in state
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
