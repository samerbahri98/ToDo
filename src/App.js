import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Tabs from "./Components/Tabs/Tabs";
import Tasklist from "./Components/Tasklist/Tasklist";
import './App.css'

class App extends Component {
  state = {
    currentCat: "All",
    allowedCat:[]
  };

  update = cat => {
    this.setState({ currentCat: cat });
  };

  allowedCat= array => this.setState({allowedCat:array})

  render() {
    return (
      <div className="App">
        <Header />
        <Tabs update={this.update} allowedCat= {this.allowedCat}/>
        <div className="container is-fluid">
          <div className="notification">
            <Tasklist currentCat={this.state.currentCat} allowedCat= {this.state.allowedCat}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
