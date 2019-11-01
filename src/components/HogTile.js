import React from 'react';

export class HogTile extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showingDetails: false
    }
  }

  render() {
    const imgSrc = require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/ /g, "_")}.jpg`)
    
    return (
      <div className="ui eight wide column" onClick={this.handleFlip} ref={this.tile}>
        <h2>{this.props.hog.name}</h2>
        {this.state.showingDetails ? 
          <ul>
            <li>Specialty: {this.props.hog.specialty}</li>
            <li>Weight: {this.props.hog.weight}</li>
            <li>Highest medal achieved: {this.props.hog["highest medal achieved"]}</li>
          </ul> :
          <img src={imgSrc} alt="" />
        }
        <button onClick={this.handleHideHog}>Hide Hog</button>
      </div>
    );
  }

  handleFlip = () => {
    this.setState(previousState => {
      return {showingDetails: !previousState.showingDetails}
    });
  }

  handleHideHog = () => {
    this.props.hideHog(this.props.hog);
  }

}

export default HogTile;
