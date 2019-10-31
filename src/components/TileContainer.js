import React from 'react'
import Tile from './Tile'

class TileContainer extends React.Component {

    render() {
        return (
            <div className='tile-container'>
                {this.props.pigs.map(pig =>
                    <Tile pig={pig} />
                )}
            </div>
        )
    }
}

export default TileContainer