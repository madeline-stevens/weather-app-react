import React, { Component } from "react";

class Dayfive extends Component {
  render() {
    return (
      <div>
        {this.props.temp_min4 &&
          this.props.temp_max4 && <h4>the rest of the Five Day Forecast</h4>}

        <div>{this.props.dt_txt4 && <p> day: {this.props.dt_txt4}</p>}</div>

        {this.props.temp_max4 && (
          <p>
            {" "}
            High: {this.props.temp_max4}
            &deg;F{" "}
          </p>
        )}

        {this.props.temp_min4 && (
          <p>
            {" "}
            Low: {this.props.temp_min4}
            &deg;F
          </p>
        )}

        {this.props.descriptionSix && (
          <p>weather forecast: {this.props.descriptionSix}</p>
        )}
      </div>
    );
  }
}

export default Dayfive;
