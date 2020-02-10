import React, { Component, Fragment } from "react";
import TaskUpdate from "./TaskUpdate";

export default class Task extends Component {
  state = {
    updateTask: false
  };

  update = () => {
    this.setState({ updateTask: true });
  };
  cancelUpdate = () => {
    this.setState({ updateTask: false });
  };
  delete = () => {
    this.props.delete(this.props.obj.id);
  };
  render() {
    let C = "Task notification ";
    switch (this.props.obj.priority) {
      case "Low":
        C += "is-success";
        break;
      case "Medium":
        C += "is-primary";
        break;
      case "High":
        C += "is-warning";
        break;
      case "Urgent":
        C += "is-danger";
        break;
    }
    return (
      <div className={C} onClick={this.update}>
        {this.state.updateTask? (
          <TaskUpdate 
          allowedCat={this.props.allowedCat} 
          cancelUpdate={this.cancelUpdate}/>
        ) : (
          <Fragment></Fragment>
        )}
        <button className="delete" onClick={this.delete}></button>
        <label>{this.props.obj.name}</label>
        <br />
        <span className="tag">{this.props.obj.owner}</span>
        <br />
        <em>{this.props.obj.priority}</em>
        <br />
        <label>
          <span className="icon is-left ">
            <i className="fa fa-calendar"></i>{" "}
          </span>
          {this.props.obj.deadline.toLocaleDateString("en-US")}
        </label>
      </div>
    );
  }
}
