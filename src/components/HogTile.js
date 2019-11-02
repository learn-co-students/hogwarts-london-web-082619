import React from 'react';
import HogDetails from './HogDetails';

class HogTile extends React.Component {

    state = {
        showDetails: false
    }

    snakeCaseName = (name) => {
        return name.split(" ").join("_").toLocaleLowerCase()
    }

    handleClick = (event) => {
        this.toggleShowDetails();
    }

    toggleShowDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render() {
    
        const {name} = this.props.hog

        return (
            <div className="ui card" onClick={this.handleClick}>
                <div className="image">
                    <img src={require(`../hog-imgs/${this.snakeCaseName(name)}.jpg`)} alt="Pig"></img>
                </div>
                <div className="content" >
                    <a className="header">{name}</a>
                   {this.state.showDetails ? < HogDetails hog={this.props.hog}/> : null}
                </div>
            </div>
        )
    }
}

export default HogTile;
