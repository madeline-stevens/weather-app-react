import React, { Component } from "react";

class Forecast extends Component {
  render() {
    return (
      <div>
        {this.props.temp_min &&
          this.props.temp_max && <h3>Five Day Forecast</h3>}
        <div>{this.props.dt_txt && <p> day: {this.props.dt_txt}</p>}</div>
        {this.props.temp_max && (
          <p>
            {" "}
            High: {this.props.temp_max}
            &deg;F{" "}
          </p>
        )}
        {this.props.temp_min && (
          <p>
            {" "}
            Low: {this.props.temp_min}
            &deg;F
          </p>
        )}
        {this.props.descriptionTwo && (
          <p>weather forecast: {this.props.descriptionTwo}</p>
        )}
      </div>
    );
  }
}

export default Forecast;
