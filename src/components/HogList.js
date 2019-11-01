import React from 'react';
import HogTile from "./HogTile";

export class HogList extends React.PureComponent {
  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map(hog => {
          return <HogTile key={hog.name} hog={hog} hideHog={this.props.hideHog} />
        })}
      </div>
    );
  }
}

export default HogList;
