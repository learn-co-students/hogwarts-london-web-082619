import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<div>
			<button onClick={props.toggleShowGreased}>Toggle Greased</button>
			<button onClick={props.toggleSortName}>Toggle Name Sort</button>
			<button onClick={props.toggleSortWeight}>Toggle Weight Sort</button>
			</div>
			

			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			
		</div>
	)
}

export default Nav
