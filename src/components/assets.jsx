import React, { Component } from "react";

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assests: {
        cashAndInvestments: {
          chequing: "400",
          savingsForTaxes: "200",
          rainyDayFund: "500",
          savingsForFun: "1200",
          savingsForTravel: "4000",
          savingsForPersonalDevelopment: "600",
          investment1: "6000",
          investment2: "5000",
          investment3: "2000",
          investment4: "1000",
          investment5: "10000",
        },
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, key) {
    event.preventDefault();
    let updatedStateValue = this.state.assests.cashAndInvestments;
    updatedStateValue[key] = event.target.value;
    this.setState({ updatedStateValue });
    this.props.getAsset(this.state.assests.cashAndInvestments);
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Assets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">Cash and Investments</td>
            </tr>

            {Object.entries(this.state.assests.cashAndInvestments).map(
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

export default Assets;
