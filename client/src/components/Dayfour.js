import React, { Component } from "react";

class Dayfour extends Component {
  render() {
    return (
      <div>
        {this.props.temp_min3 && this.props.temp_max3}

        <div>{this.props.dt_txt3 && <p> day: {this.props.dt_txt3}</p>}</div>

        {this.props.temp_max3 && (
          <p>
            {" "}
            High: {this.props.temp_max3}
            &deg;F{" "}
          </p>
        )}

        {this.props.temp_min3 && (
          <p>
            {" "}
            Low: {this.props.temp_min3}
            &deg;F
          </p>
        )}

        {this.props.descriptionFive && (
          <p>weather forecast: {this.props.descriptionFive}</p>
        )}
      </div>
    );
  }
}

export default Dayfour;
