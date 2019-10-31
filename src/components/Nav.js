import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div>
			<button onClick={props.filterGreasedPigs} >Toggle Greased Pigs Only</button>
			<button onClick={props.toggleAlphabetised} >Sort By Name</button>
			<button onClick={props.toggleWeightOrdered} >Sort By Weight</button>
			<div className="navWrapper">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<img src={piggy} className="App-logo" alt="piggy" />
				</div>
				<span >A React App for County Fair Hog Fans</span>
			</div>
		</div>

	)
}

export default Nav
