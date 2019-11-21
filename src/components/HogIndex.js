import React from 'react'
import HogTile from './HogTile'

export default class HogIndex extends React.Component{
    render() {
        return (
            <div id='hog-index' className="ui grid container">
                {this.props.hogs.map(hog => <HogTile hog={hog} />)}
            </div>
        )
    }

}