import React, { Component } from "react";
import Popup from "reactjs-popup";

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assests: {
        chequing: "",
        savingsForTaxes: "",
        rainyDayFund: "",
        savingsForFun: "",
        savingsForTravel: "",
        savingsForPersonalDevelopment: "",
        investment1: "",
        investment2: "",
        investment3: "",
        investment4: "",
        investment5: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, key) {
    let updatedStateValue = this.state.assests;
    updatedStateValue[key] = event.target.value;
    this.setState({ updatedStateValue });
    this.props.getAsset(updatedStateValue);
  }

  addNewRow(e, close) {
    let newField = document.getElementById("newAssetFieldName").value;
    let updatedStateValue = this.state.assests;
    updatedStateValue[newField] = "";
    this.setState({ updatedStateValue });
    close();
  }

  deleteRow(event, key) {
    delete this.state.assests[key[0]];
    let AssetObject = this.state.assests;
    this.setState({ AssetObject });
  }

  deleteRow(event, key) {
    delete this.state.assests[key[0]];
    let updatedCashAndInvestmentObject = this.state.assests.cashAndInvestments;
    this.setState({ updatedCashAndInvestmentObject });
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th colSpan="2">ASSETS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">
                <Popup modal trigger={<button>Add New Row</button>}>
                  {(close) => (
                    <table id="inputPopup">
                      <thead>
                        <tr>
                          <td>Add Asset</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label>Asset name</label>
                          </td>
                          <td>
                            <input
                              name="newAssetFieldName"
                              id="newAssetFieldName"
                              type="text"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button onClick={(e) => this.addNewRow(e, close)}>
                              Add Asset
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </Popup>
              </td>
            </tr>

            {Object.entries(this.state.assests).map((key, value) => (
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
                <td>
                  <button onClick={(e) => this.deleteRow(e, key)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Assets;
