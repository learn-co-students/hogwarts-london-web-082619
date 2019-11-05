import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import HogFilter from './HogFilter'
import API from '../adapters/API'

class App extends Component {

  state = {
    hogs: [],
    currentSortState: "default",
    filter: "all"
  }

  componentDidMount() {
    API.getHogs().then(hogs => this.setState({ hogs }))
  }

  changeSortState = event => {
    this.setState({
      currentSortState: event.target.value
    })
  }

  sortHogs = () => {
    if (this.state.currentSortState === "default") {
      return this.state.hogs
    }

    return [...this.state.hogs].sort((a, b) => {
        if (this.state.currentSortState === "name") return a.name.localeCompare(b.name)
        if (this.state.currentSortState === "weight") return b.weight - a.weight
    })  
  }

  changeFilter = event => {
    this.setState({
      filter: event.target.value
    })
  }

  filterHogs = (filter, hogs) => {
    if (filter === "all") return hogs
    
    if (filter === "greased") {
      return [...hogs].filter(hog => hog.greased === true)
    }
  }


  render() {

    const sortedHogs = this.sortHogs()
    const hogsToRender = this.filterHogs(this.state.filter, sortedHogs)

    return (
      <div className="App">
        <Nav />
        <HogFilter sort={this.state.currentSortState} 
                   filter={this.state.filter}
                   changeSortState={this.changeSortState}
                   changeFilter={this.changeFilter}/>
        <HogList hogs={hogsToRender}/>
      </div>
    )
  }
}

export default App;
