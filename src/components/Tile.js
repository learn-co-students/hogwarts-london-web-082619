import React from 'react'
import Pig from './Pig'


class Tile extends React.Component {

    state = {
        class: 'pig-card'
    }

    hideHog = () => {
        this.setState({
            class: 'hidden'
        })
    }

    render() {
        return (

            <div className={this.state.class}><div className='ui card'><Pig pig={this.props.pig} hideHog={this.hideHog} /></div></div>
        )
    }
}

export default Tile