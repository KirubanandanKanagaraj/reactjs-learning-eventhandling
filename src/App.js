import React, { Component } from "react";
import axios from "axios";
import Assets from "./components/assets";
import Liability from "./components/liability";
import "./App.css";

class App extends Component {
  state = {
    assetTotal: "",
    liabilityTotal: "",
    endResult: "",
  };

  getAsset = (e) => {
    console.log(e);
    let valuesFromAssets = Object.values(e).map(Number);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let assetValue = valuesFromAssets.reduce(reducer);
    this.setState({
      assetTotal: assetValue,
    });
  };

  getLiability = (e) => {
    console.log(e);
    let valuesFromLiability = Object.values(e).map(Number);
    const reducer1 = (accumulator, currentValue) => accumulator + currentValue;
    let liabilityValue = valuesFromLiability.reduce(reducer1);
    this.setState({
      liabilityTotal: liabilityValue,
    });
  };

  getNetWorth = () => {
    let data = [
      {
        description: "ASSET",
        value: this.state.assetTotal,
      },
      {
        description: "LIABILITY",
        value: this.state.liabilityTotal,
      },
    ];
    axios
      .post(`http://localhost:8080/netWorth`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res + " result");
        this.setState({
          endResult: res.data,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Net Worth Calculator</h1>
        </header>
        <div>
          <Assets getAsset={this.getAsset} />
        </div>
        <br></br>
        <div>
          <Liability getLiability={this.getLiability} />
        </div>
        <br></br>
        <div>Total networth value: {this.state.endResult}</div>
        <button onClick={this.getNetWorth}>submit</button>
      </div>
    );
  }
}

export default App;
