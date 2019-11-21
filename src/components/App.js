import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogIndex from './HogIndex';

class App extends Component {
  state = {
    hogs: hogs // from import
  }
  render() {
    return (
      <div className="App">
          < Nav />
          <HogIndex hogs={this.state.hogs} /> 

      </div>
    )
  }
}

export default App;
