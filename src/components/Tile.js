import React, { Component } from 'react';
import {
    Card, Image, Icon
} from "semantic-ui-react";

class Tile extends Component {

    state = {
        class: 'pigTile'
    }
   
    hideHog = () => {
        this.setState({
            class: 'hidden'
        })
    }

  render() {
      const {name, specialty, weight} = this.props.pig
    return (
        
        <div className={this.state.class}>
            <Card>
            <h3>{name}</h3>
            
            <Image src={require(`../hog-imgs/${name.toLowerCase().replace(/ /g,'_')}.jpg`)} alt=''></Image> 
            <Card.Meta>Specialty: {specialty}</Card.Meta>           
            <Card.Description>
            
            <div>Weight: {weight}kg <Icon name='balance scale'></Icon></div>
            </Card.Description>
            
            <div>Highest Medal Achieved: {this.props.pig['highest medal achieved']}</div>
            <button onClick={this.hideHog}>Hide</button>
            </Card>
        </div>
    )
  }
}

export default Tile;
