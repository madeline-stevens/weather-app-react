import React, { Component } from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Current from "./components/Current";
import Dayone from "./components/Dayone";
import Daytwo from "./components/Daytwo";
import Daythree from "./components/Daythree";
import Dayfour from "./components/Dayfour";
import Dayfive from "./components/Dayfive";

import _ from "lodash";
import moment from "moment";

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

    // if data !== country: "US"
    // return error message

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

    const result = _.chain(fiveDayData.list)
      .groupBy(datum =>
        moment(datum.dt_txt)
          .format("MMM DD YYYY")
          .toLocaleUpperCase()
      )
      .map((weather, date) => ({ date, weather }))
      //using ES6 shorthand to generate the objects
      .value();

    console.log("results:", result);

    //Calculating each days high and low temp
    //For each day, grab the min and max (so i'll have about five of each), then add then and divide to get average???
    // result.map(oneDay => {
    //   oneDay.weather.map(day => {
    //     console.log("This is your individual day to do what you please", day);
    //   });
    // });

    // return results.map(result => {
    //   let totalHighTemp = 0;
    //   let totalLowTemp = 0;
    //   return result.weather.map(day => {
    //     //Maybe you want to find averages?
    //     //IDK what the actual day looks like so I'm guessing on keys.
    //     day.highTemp + totalHighTemp;
    //     day.lowTemp + totalLowTemp;
    //   });
    //   console.log(totalHighTemp / result.length, totalLowTemp / result.length);
    // });

    this.setState({
      dt_txt: result[0].date,
      temp_min: result[0].weather[0].main.temp_min,
      temp_max: result[0].weather[0].main.temp_max,
      descriptionTwo: result[0].weather[0].weather[0].description,
      error: ""
    });
    this.setState({
      dt_txt1: result[1].date,
      temp_min1: result[1].weather[0].main.temp_min,
      temp_max1: result[1].weather[0].main.temp_max,
      descriptionThree: result[1].weather[0].weather[0].description,
      error: ""
    });
    this.setState({
      dt_txt2: result[2].date,
      temp_min2: result[2].weather[0].main.temp_min,
      temp_max2: result[2].weather[0].main.temp_max,
      descriptionFour: result[2].weather[0].weather[0].description,
      error: ""
    });
    this.setState({
      dt_txt3: result[3].date,
      temp_min3: result[3].weather[0].main.temp_min,
      temp_max3: result[3].weather[0].main.temp_max,
      descriptionFive: result[3].weather[0].weather[0].description,
      error: ""
    });
    this.setState({
      dt_txt4: result[4].date,
      temp_min4: result[4].weather[0].main.temp_min,
      temp_max4: result[4].weather[0].main.temp_max,
      descriptionSix: result[4].weather[0].weather[0].description,
      error: ""
    });
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Form weatherAPIcall={this.weatherAPIcall} />
        <Current
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        <Dayone
          dt_txt={this.state.dt_txt}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          descriptionTwo={this.state.descriptionTwo}
        />
        <Daytwo
          dt_txt1={this.state.dt_txt1}
          temp_min1={this.state.temp_min1}
          temp_max1={this.state.temp_max1}
          descriptionThree={this.state.descriptionThree}
        />
        <Daythree
          dt_txt2={this.state.dt_txt2}
          temp_min2={this.state.temp_min2}
          temp_max2={this.state.temp_max2}
          descriptionFour={this.state.descriptionFour}
        />
        <Dayfour
          dt_txt3={this.state.dt_txt3}
          temp_min3={this.state.temp_min3}
          temp_max3={this.state.temp_max3}
          descriptionFive={this.state.descriptionFive}
        />
        <Dayfive
          dt_txt4={this.state.dt_txt4}
          temp_min4={this.state.temp_min4}
          temp_max4={this.state.temp_max4}
          descriptionSix={this.state.descriptionSix}
        />
      </div>
    );
  }
}

export default App;
