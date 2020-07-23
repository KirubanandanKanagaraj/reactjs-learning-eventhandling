import React, { Component } from "react";
import axios from "axios";
import Assets from "./components/assets";
import Liability from "./components/liability";
import "./App.css";

class App extends Component {
  state = {};

  getAsset = (e) => {
    console.log(e);
    axios.get(`https://api.github.com/users/john`).then((res) => {
      console.log(res);
    });
  };

  getLiability = (e) => {
    console.log(e);
    axios.get(`https://api.github.com/users/archana`).then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP calls in React</h1>
        </header>
        <Assets getAsset={this.getAsset} />
        <Liability getLiability={this.getLiability} />
      </div>
    );
  }
}

export default App;
