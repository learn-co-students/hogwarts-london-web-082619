import React, { Component } from 'react';
import '../App.css';
import hogs from '../porkers_data';
import Nav from './Nav'
import ControlBar from './ControlBar';
import HogList from "./HogList"

class App extends Component {
  state = {
    filterGreasedHogs: false,
    hiddenHogs: [],
    sortOn: null
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <ControlBar filterGreasedHogs={this.state.filterGreasedHogs} toggleFilter={this.toggleFilter} toggleSort={this.toggleSort} />
        <HogList hogs={this.filterAndSortHogs()} hideHog={this.hideHog} />
      </div>
    )
  }

  toggleFilter = () => {
    this.setState(previousState => {
      return {
        filterGreasedHogs: !previousState.filterGreasedHogs
      }
    });
  }

  toggleSort = sortOn => {
    this.setState({ sortOn });
  }

  filterAndSortHogs = () => {
    if (this.state.sortOn === "name") {
      return this.sortFilteredHogsByName();
    } else if (this.state.sortOn === "weight") {
      return this.sortFilteredHogsByWeight();
    } else {
      return this.filterHogs();
    }
  }

  sortFilteredHogsByName = () => {
    return this.filterHogs().sort((a,b) => {
      return (a.name).localeCompare(b.name);
    });
  }

  sortFilteredHogsByWeight = () => {
    return this.filterHogs().sort((a,b) => {
      return a.weight - b.weight;
    });
  }

  filterHogs = () => {
    const visibleHogs = this.getVisibleHogs();
    if (this.state.filterGreasedHogs) {
      return visibleHogs.filter(hog => hog.greased);
    } else {
      return visibleHogs;
    }
  }

  getVisibleHogs = () => {
    return hogs.filter(hog => {
      return !this.state.hiddenHogs.includes(hog)
    });
  }

  hideHog = hog => {
    this.setState(previousState => {
      return {
        hiddenHogs: [...previousState.hiddenHogs, hog]
      }
    });
  }

}

export default App;
