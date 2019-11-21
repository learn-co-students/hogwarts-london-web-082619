import React from 'react'
import HogDetails from './HogDetails'


export default class HogTile extends React.Component{
    state ={
        displayDetails: false
    }
    
    snakeCaseName = () => {
        return this.props.hog.name.split(" ").join("_").toLocaleLowerCase();
    }
  
    toggleDisplayDetails = () =>{
        this.setState({
            displayDetails: !this.state.displayDetails
        })
    }

    displayDetails = () =>{
        if (this.state.displayDetails){
            return <HogDetails hog= {this.props.hog}/>
        }
    }
      
      render() {
        const {name} = this.props.hog
        return (
            <div id='hog-tile' className="  eight wide column" onClick={this.toggleDisplayDetails}>
            <h3>{name}</h3>
            <img src={require(`../hog-imgs/${this.snakeCaseName()}.jpg`)}/>
            <div>{this.displayDetails()}</div>
            </div>
        )
    }

}