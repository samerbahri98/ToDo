import React, { Component, Fragment } from "react";
import Task from "./Task/Task";
import Edits from "./Edits/Edits";
import AddTask from "./AddTask/AddTask.js"

export default class Tasklist extends Component {
  state = {
    tasksArray: [
      {
        id: "ta1",
        name: "Calculus homework",
        owner: "samer",
        priority: "Urgent",
        category: "school",
        deadline: new Date("May 09, 2020"),
        done: false
      },
      {
        id: "ta2",
        name: "buy chicken",
        owner: "samer",
        priority: "Low",
        category: "market",
        deadline: new Date("May 10, 2020"),
        done: false
      },
      {
        id: "ta3",
        name: "E100",
        owner: "samer",
        priority: "Medium",
        category: "school",
        deadline: new Date("May 10, 2020"),
        done: false
      }
    ],
    AddTask: false
  };

  delete = id => {
    let stateUpdate = this.state.tasksArray;
    stateUpdate.forEach(elem => {
      if (elem.id === id && elem.done === false) {
        elem.done = true;
      }
    });
    this.setState({ tasksArray: stateUpdate });
  };

  deleteAll = () => {
    if (
      window.confirm(
        `do you want to delete all the tasks for ${this.props.cat} category?`
      )
    ) {
      let stateUpdate = this.state.tasksArray;
      stateUpdate.forEach(elem => {
        if (this.props.cat === elem.category || this.props.cat === "All") {
          elem.done = true;
        }
      });
      this.setState({ tasksArray: stateUpdate });
    }
  };

  displayAdd= () => this.setState({AddTask: true})
  cancelAdd= () => this.setState({AddTask: false})
  submitAdd= (task) => {
    let currentState= this.state.tasksArray
    currentState.push(task)
    this.setState({tasksArray:currentState})
  }
  render() {
    return (
      <div className="tasksList">
        {this.state.tasksArray.map(elem =>
          (this.props.cat === "All" || this.props.cat === elem.category) &&
          elem.done === false ? (
            <Task key={elem.id} obj={elem} delete={this.delete}  allowedCat= {this.props.allowedCat}/>
          ) : (
            <Fragment key={elem.id}></Fragment>
          )
        )}
        {this.state.AddTask
        ?(<AddTask cancelAdd={this.cancelAdd} submitAdd={this.submitAdd} allowedCat= {this.props.allowedCat}/>)
        :(<Fragment />)
        }
        <Edits deleteAll={this.deleteAll} displayAdd={this.displayAdd}/>
      </div>
    );
  }
}
