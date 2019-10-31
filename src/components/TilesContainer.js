import React, { Component } from 'react';
import Tile from './Tile'

class TilesContainer extends Component {

  render() {
    return (
      <div className="TilesContainer">
          {this.props.pigs.map((pig, idx) => 
                <Tile key={idx} pig={pig}/>
            )}       
      </div>
    )
  }
}

export default TilesContainer;
