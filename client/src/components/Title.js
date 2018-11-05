import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div>
        <h1>React Weather App</h1>
        <h5>
          {" "}
          Search by city or zipcode to get current and five day weather
          forecasts
        </h5>
      </div>
    );
  }
}

export default Title;
