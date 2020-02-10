import React, { Component } from 'react'

export default class Tab extends Component {
    select = (event) =>{
        this.props.activate(this.props.id)
    }
    remove = () => {
        this.props.removeTab(this.props.id)
        this.props.activate("cat0")
    }
    render() {
        return (
            <a onClick={this.select}  className={this.props.active}>
                {/* <button
              className="delete is-small"
              aria-label="close"
              onClick={this.remove}
            ></button> */}
                {this.props.name}
            </a>
        )
    }
}
