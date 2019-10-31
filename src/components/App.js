import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TileContainer from './TileContainer'
import Tile from './Tile'

class App extends Component {

  state = {
    pigs: hogs,
    showGreasedToggle: false,
    alphabetical: false,
    weightOrder: false,
  }

  filterGreasedPigs = () => {
    this.setState({
      ...this.state,
      showGreasedToggle: !this.state.showGreasedToggle
    })
  }

  toggleAlphabetised = () => {
    this.setState({
      ...this.state,
      alphabetical: !this.state.alphabetical,
      weightOrder: false
    })
  }

  toggleWeightOrdered = () => {
    this.setState({
      ...this.state,
      weightOrder: !this.state.weightOrder,
      alphabetical: false

    })
  }

  render() {

    const pigsArray = this.state.showGreasedToggle === false ?
      this.state.pigs :
      this.state.pigs.filter(pig => pig.greased === true)

    const orderByName = this.state.alphabetical === false ?
      pigsArray :
      pigsArray.sort((a, b) => (a.name > b.name) ? 1 : -1)

    const orderByWeight = this.state.weightOrder === false ?
      pigsArray :
      pigsArray.sort((a, b) => (a.weight > b.weight) ? -1 : 1)

    return (
      <div className="App">
        < Nav filterGreasedPigs={this.filterGreasedPigs} toggleAlphabetised={this.toggleAlphabetised} abc={this.state.alphabetical} greased={this.state.showGreasedToggle} toggleWeightOrdered={this.toggleWeightOrdered} />
        <TileContainer pigs={pigsArray} />
      </div>
    )
  }
}

export default App;
