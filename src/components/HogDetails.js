import React from 'react';

class HogDetails extends React.Component {
  render() {
    const {specialty, greased, weight} = this.props.hog

    return (
        <div class="description">
            <p>Specialty: {specialty}</p>
            <p>Greased: {greased ? "Yes" : "No"}</p>
            <p>Weight: {weight}</p>
            <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
        </div>
    )
  }
}

export default HogDetails;
