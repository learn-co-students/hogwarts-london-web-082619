import React from 'react'


class Pig extends React.Component {


    render() {
        const { name, specialty, weight, greased, medal } = this.props.pig

        return (
            <div>
                <h3>{name}</h3>
                <img src={require(`../hog-imgs/${name.toLowerCase().replace(/ /g, '_')}.jpg`)} alt="" />
                <div>Speciality: {specialty}</div>
                <div>Weight: {weight}</div>
                <div>Highest Medal Achieved: {medal}</div>
                <button onClick={this.props.hideHog}>Hide Hog</button>
            </div>
        )
    }
}

export default Pig