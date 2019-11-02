import React from 'react';

class FilterAndSort extends React.Component {
  render() {
    return (
      <div className="ui buttons">
        <button className="ui button">Filter By Greased</button>
        <div className="or"></div>
        <button className="ui positive button">Sort by Name</button>
        <div className="or"></div>
        <button className="ui button">Sort by Weight</button>
      </div>
    )
  }
}

export default FilterAndSort;
