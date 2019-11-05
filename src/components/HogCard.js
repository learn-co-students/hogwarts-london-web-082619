import React from 'react'

class HogCard extends React.Component {
    
    state = {
        showDetails: false
    }

    snakeCaseName = name => name.toLowerCase().replace(/ /g, '_')
    
    toggleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render() {

        const { name, specialty, greased, weight } = this.props.hogDetails
        const medal = this.props.hogDetails['highest medal achieved']
        console.log(this.props.hogDetails)
        return (
            <div className="card">
                <div className="image">
                    <img alt={name} src={require(`../hog-imgs/${this.snakeCaseName(name)}.jpg`)} />
                </div>
                <div className="content">
                    <a className="header">{name}</a>
                    <div className="description">Specialty: {specialty}</div>
                </div>
                { this.state.showDetails ? 
                <div className="extra content">
                        <p>Greased? {greased ? "Yes" : "No"}</p>
                        <p>Current Weight: {weight} kg</p>
                        <p>Highest medal: {medal}</p>
                </div>
                :
                null
                }
                <button className="ui toggle button" onClick={this.toggleDetails}>{this.state.showDetails ? "Hide Details" : "Show Details"}</button>
            </div>
        )
    }
}

export default HogCard