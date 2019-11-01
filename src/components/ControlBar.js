import React, { Component } from 'react';

export class ControlBar extends Component {
  render() {
    return (
      <div className="control-bar">
        <button onClick={this.props.toggleFilter}>{this.props.filterGreasedHogs ? "Show All Hogs" : "Filter Greased Hogs"}</button>
        <button name="name" onClick={this.handleSortClick}>Sort By Name</button>
        <button name="weight" onClick={this.handleSortClick}>Sort By Weight</button>
      </div>
    );
  }

  handleSortClick = event => {
    this.props.toggleSort(event.target.name);
  }
}

export default ControlBar;
