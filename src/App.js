import React from 'react';
import data from './data.json'
import './App.css';

import FilterableProductTable from './components/FilterableProductTable'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMarked: false,
      keysToFilter: ""
    };
  }


  render() {
    return(
      <div className="App">
        <FilterableProductTable products={data}/>
      </div>
    );
  }
}


export default App;
