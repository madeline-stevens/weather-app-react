import React, { Component } from "react";

class Daythree extends Component {
  render() {
    return (
      <div>
        {this.props.temp_min2 &&
          this.props.temp_max2 && <h3>the rest of the Five Day Forecast</h3>}

        <div>{this.props.dt_txt2 && <p> day: {this.props.dt_txt2}</p>}</div>

        {this.props.temp_max2 && (
          <p>
            {" "}
            High: {this.props.temp_max2}
            &deg;F{" "}
          </p>
        )}

        {this.props.temp_min2 && (
          <p>
            {" "}
            Low: {this.props.temp_min2}
            &deg;F
          </p>
        )}

        {this.props.descriptionFour && (
          <p>weather forecast: {this.props.descriptionFour}</p>
        )}
      </div>
    );
  }
}

export default Daythree;
