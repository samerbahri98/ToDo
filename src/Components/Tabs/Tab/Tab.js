import React, { Component, Fragment } from "react";

export default class Tab extends Component {
  select = event => {
    this.props.activate(this.props.id);
  };
  remove = () => {
    this.props.removeTab(this.props.id);
    if ( window.confirm( `Do you want to delete all the ${this.props.name} Category?`) )
    {
      this.props.removeTab(this.props.id);
      this.props.activate("cat0");
    }
  };
  render() {
    return (
      <a onClick={this.select} className={this.props.active}>
        {this.props.name === "All" ? (
          <Fragment></Fragment>
        ) : (
          <button
            className="delete is-small"
            aria-label="close"
            onClick={this.remove}
          ></button>
        )}
        {this.props.name}
      </a>
    );
  }
}
