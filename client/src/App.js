import React, { Component } from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";

import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    temp_min: undefined,
    descriptionTwo: undefined,
    date: undefined
  };

  weatherAPIcall = async e => {
    e.preventDefault();
    console.log("CURRENT STATE : ", this.state);
    const city = e.target.elements.city.value;

    const temp_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
    ).catch(error => {
      console.log("Error : ", error.message);
    });

    const fiveDay_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`
    ).catch(error => {
      console.log("Error : ", error.message);
    });

    //current temp
    const data = await temp_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });

    // five day forecast list
    const fiveDayData = await fiveDay_call.json();
    console.log("five day data:", fiveDayData);

    // fiveDayData.list.map((data, index) => {
    //   return data.dt_txt.split(" ")[0] ===
    //     fiveDayData.list[index + 1].dt_txt.split(" ")[0]
    //     ? console.log("same day", data)
    //     : console.log("not same day");
    // });

    this.setState({
      dt_txt: fiveDayData.list[0].dt_txt,
      temp_min: fiveDayData.list[0].main.temp_min,
      temp_max: fiveDayData.list[0].main.temp_max,
      descriptionTwo: fiveDayData.list[0].weather[0].description,
      error: ""
    });
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Form weatherAPIcall={this.weatherAPIcall} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        <Forecast
          dt_txt={this.state.dt_txt}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          descriptionTwo={this.state.descriptionTwo}
        />
      </div>
    );
  }
}

export default App;
