import React from 'react';
import '../App.css';
import Nav from './Nav'
import HogIndex from './HogIndex';
import FilterAndSort from './FilterAndSort';
import hogs from '../porkers_data';

class App extends React.Component {

  state = {
    hogs: [],
    filterByGreased: false,
    sortByName: false,
    sortByWeight: false
  }

  componentDidMount(){
    this.setState({
      hogs: hogs
    })
  }

  render() {
    return (
      <div className="App">
        < Nav />
        < FilterAndSort />
        < HogIndex hogs={this.state.hogs} />

      </div>
    )
  }
}

export default App;
