import React from 'react'
import HogCard from './HogCard'

class HogList extends React.Component {
    render() {
        return (
            <div className ="ui cards">
                {this.props.hogs.map(hog => (
                    <HogCard key={hog.id} hogDetails={hog}/>
                ))}
            </div>
        )  
    }
}

export default HogList;