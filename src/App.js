import React, { Component } from "react";

import Assets from "./components/assets";
import Liability from "./components/liability";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP calls in React</h1>
        </header>
        <Assets />
        <Liability />
      </div>
    );
  }
}

export default App;
