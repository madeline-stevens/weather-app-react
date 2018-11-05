import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.city && <p> {this.props.city}</p>}
        {this.props.country && <p> {this.props.country}</p>}
        {this.props.temperature && (
          <p>
            current temp: {this.props.temperature}
            &deg;F
          </p>
        )}
        {this.props.humidity && (
          <p>
            {this.props.humidity}
            &#37; humidity
          </p>
        )}
        {this.props.description && (
          <p>current weather: {this.props.description}</p>
        )}
      </div>
    );
  }
}

export default Weather;
