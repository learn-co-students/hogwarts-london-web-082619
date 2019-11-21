import React from 'react'

export default class HogDetails extends React.Component{
    render() {
        const {specialty, gresed, weight} = this.props.hog
        return (
            <div id='hog-index'>
            <p>Specialty: {specialty}</p>
            <p>Gresed: {gresed ? "yes": "No"}</p>
            <p>Weight: {weight}</p>
            <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
            </div>
        )
    }

}