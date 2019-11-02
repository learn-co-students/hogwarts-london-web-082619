import React from 'react';
import HogTile from './HogTile';

const HogIndex = (props) => {
    return (
        <div className="ui link cards">
            {props.hogs.map(hog => < HogTile key={hog.name} hog={hog}/>)}
        </div>
    )
}

export default HogIndex;
