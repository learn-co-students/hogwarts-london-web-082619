import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import TilesContainer from './TilesContainer'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    pigs: hogs,
    showGreasedToggle: false,
    sortNameToggle: false,
    sortWeightToggle: false
  }


  toggleShowGreased = () => {
    this.setState({
      showGreasedToggle: !this.state.showGreasedToggle
    })
  }

  toggleSortName = () => {
    this.setState({
      sortNameToggle: !this.state.sortNameToggle,
      sortWeightToggle: false
    })
  }

  toggleSortWeight = () => {
    this.setState({
      sortWeightToggle: !this.state.sortWeightToggle,
      sortNameToggle: false
    })
  }

  pigsByGreasedFilter = (array = this.state.pigs) => {
    const newArray = [...array]
    const pigsArray = (this.state.showGreasedToggle)? 
      newArray.filter(pig => pig.greased === true) : array;
    return pigsArray
  }

  pigsByNameSortFilter = (array = this.state.pigs) => {
    const newArray = [...array]
    const pigsArray = (this.state.sortNameToggle)? 
      newArray.sort((a,b)=>(a.name > b.name)?1:-1) : array;
    return pigsArray
  }

  pigsByWeightSortFilter = (array = this.state.pigs) => {
    const newArray = [...array]
    const pigsArray = (this.state.sortWeightToggle)? 
      newArray.sort((a,b)=>(a.weight > b.weight)?1:-1) : array;
    return pigsArray
  }

  filterPigs = () => {
    return this.pigsByWeightSortFilter(this.pigsByNameSortFilter(this.pigsByGreasedFilter()))
  }

  render() {
    
    return (
      <div className="App">
          < Nav toggleShowGreased={this.toggleShowGreased} toggleSortName={this.toggleSortName} toggleSortWeight={this.toggleSortWeight}/>
          <TilesContainer pigs={this.filterPigs()}/>
      </div>
    )
  }
}

export default App;
