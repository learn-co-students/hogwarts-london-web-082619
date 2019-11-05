import React from 'react'

class HogFilter extends React.Component {
    render() {
         return (
            <div>
                <div className="ui buttons">
                    <button className={this.props.sort === "default" ? "ui primary button" : "ui button"} value="default" onClick={(e) => this.props.changeSortState(e)}>Default</button>
                    <div className="or"></div>
                    <button className={this.props.sort === "name" ? "ui primary button" : "ui button"} value="name" onClick={(e) => this.props.changeSortState(e)}>Name</button>
                    <div className="or"></div>
                    <button className={this.props.sort === "weight" ? "ui primary button" : "ui button"} value="weight" onClick={(e) => this.props.changeSortState(e)}>Weight</button>
                </div>
                <select onChange={(e) => this.props.changeFilter(e)} className="ui search dropdown">
                    <option value="all">All</option>
                    <option value="greased">Greased</option>
                </select>
            </div>
        )
    }
}

export default HogFilter