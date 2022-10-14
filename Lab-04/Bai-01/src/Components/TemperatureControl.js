import React, { Component } from "react";

const scaleMapping = {
  C: "Celsius",
  F: "Fahrenheit",
  K: "Kelvin",
};
export default class TemperatureControl extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  handleSelectChange(e) {
    this.props.onScaleChange(e.target.value);
  }

  render() {
    return (
      <div className="Temp">
        <h2>Temperature in {scaleMapping[this.props.scale]}</h2>
        <div>
          <select value={this.props.scale} onChange={this.handleSelectChange}>
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
            <option value="K">Kelvin</option>
          </select>
          <input
            type="text"
            value={this.props.temperature}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
