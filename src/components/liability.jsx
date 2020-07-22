import React, { Component } from "react";

class Liability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liability: {
        shortTerm: {
          creditCard1: "1890",
          creditCard2: "2198",
        },
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, key) {
    let updatedStateValue = this.state.liability.shortTerm;
    updatedStateValue[key] = event.target.value;
    this.setState({ updatedStateValue });
    //console.log(this.state.liability.shortTerm);
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Liabilities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">Short Term Liabilities</td>
            </tr>
            {Object.entries(this.state.liability.shortTerm).map(
              (key, value) => (
                <tr key={value}>
                  <td>{key[0]}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      defaultValue={key[1]}
                      onBlur={(e) => this.handleChange(e, key[0])}
                    ></input>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Liability;
