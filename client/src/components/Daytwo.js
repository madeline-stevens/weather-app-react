import React, { Component } from "react";

class Daytwo extends Component {
  render() {
    return (
      <div>
        {this.props.temp_min1 &&
          this.props.temp_max1 && <h3>the rest of the Five Day Forecast</h3>}

        <div>{this.props.dt_txt1 && <p> day: {this.props.dt_txt1}</p>}</div>

        {this.props.temp_max1 && (
          <p>
            {" "}
            High: {this.props.temp_max1}
            &deg;F{" "}
          </p>
        )}

        {this.props.temp_min1 && (
          <p>
            {" "}
            Low: {this.props.temp_min1}
            &deg;F
          </p>
        )}

        {this.props.descriptionThree && (
          <p>weather forecast: {this.props.descriptionThree}</p>
        )}
      </div>
    );
  }
}

export default Daytwo;
