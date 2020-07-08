import React, {Component} from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isMarked: false,
            keysToFilter: ""
        };
        
    }

    handleChange = (e) => {
        this.setState({keysToFilter: e.target.value})
        console.log(this.state)
    }
    
    handleState = () => {
        this.setState(state => ({isMarked: !state.isMarked}));
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar handleState={this.handleState} handleChange={this.handleChange} />
                <ProductTable products={this.props.products} state={this.state}/>
            </div>
        );
    }
}

export default FilterableProductTable;