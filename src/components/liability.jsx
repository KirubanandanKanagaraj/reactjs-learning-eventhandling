import React, { Component } from "react";
import Popup from "reactjs-popup";

class Liability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liability: {
        creditCard1: "",
        creditCard2: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, key) {
    let updatedStateValue = this.state.liability;
    updatedStateValue[key] = event.target.value;
    this.setState({ updatedStateValue });
    this.props.getLiability(updatedStateValue);
    event.preventDefault();
  }

  addNewRow(e, close) {
    let newField = document.getElementById("newLiabilityFieldName").value;
    let updatedStateValue = this.state.liability;
    updatedStateValue[newField] = "";
    this.setState({ updatedStateValue });
    close();
  }

  deleteRow(event, key) {
    delete this.state.liability[key[0]];
    let liabilityObject = this.state.Liability;
    this.setState({ liabilityObject });
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th colSpan="2">LIABILITIES</th>
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
                          <td>Add Liability</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label>Liability name</label>
                          </td>
                          <td>
                            <input
                              name="newLiabilityFieldName"
                              id="newLiabilityFieldName"
                              type="text"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button onClick={(e) => this.addNewRow(e, close)}>
                              Add Liability
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </Popup>
              </td>
            </tr>
            {Object.entries(this.state.liability).map((key, value) => (
              <tr key={value}>
                <td>{key[0]}</td>
                <td>
                  <input
                    type="number"
                    min="1"
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

export default Liability;
