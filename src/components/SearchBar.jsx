import React from 'react';

class SearchBar extends React.Component {
    render() {
        const { handleState } = this.props;
        const { handleChange } = this.props;
        
        return(
            <div>
            <div>
                <h3>Search</h3>
                <input type="text" onChange={handleChange}></input>
            </div>
            <div className="input-checkbox" onClick={handleState}>
                <input onClick={this.toggleShow} type="checkbox"></input>
                <h3>Only shows products on stock</h3>
            </div>
        </div>
        )
    }

}

export default SearchBar;
