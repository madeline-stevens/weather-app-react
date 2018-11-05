require("dotenv").load();

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var port = 3001;

// Configure app to use bodyParser to parse json data
var app = express();
var server = require("http").createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

// Test server is working (GET http://localhost:3001/api)
app.get("/api/", function(req, res) {
  res.json({ message: "Hi, welcome to the server api!" });
});

let url_prefix = "http://api.openweathermap.org/data/2.5/";

app.post("/api/getWeather", function(req, res) {
  console.log("RECIEVED DATA TO USE", req.body);

  // Uses city from client query to get CURRENT WEATHER
  var city = `${req.body.city}`;
  let fullUrl =
    url_prefix +
    `weather?q=${city}&&units=imperial&appid=${process.env.API_KEY}`;
  console.log("Fetching from " + fullUrl);
  axios.get(fullUrl).then(responseWeatherData => {
    console.log(responseWeatherData.data);

    const test = fiveDayData.map(ele => {
        return ele.data +
      console.log(ele);
    });

    res.status(200);
    res.send(retrievedDataFromWeather.data);
  });
});

// FIVE DAY FORECAST
app.post("/api/getForecast", function(req, res) {
  console.log("RECIEVED DATA TO USE", req.body);
  // Uses city from client query to get weather
  var city = `${req.body.city}`;
  let fullUrl =
    url_prefix +
    `forecast?q=${city}&&units=imperial&appid=${process.env.API_KEY}`;
  console.log("Fetching from " + fullUrl);
  axios.get(fullUrl).then(responseForecastData => {
    console.log(responseForecastData.data);
   
    const fiveDayData = await fiveDay_call.json();
    console.log("five day data:", fiveDayData);
    fiveDayData.list.map((data, index) => {
      data.dt_txt.split(' ')[0] === fiveDay_call.list[index + 1].dt_txt.split(' ')[0] ? console.log('same day') : console.log('not same day')
    });
    res.status(200);
    res.send(responseForecastData.data);
  });
});
// Start the server
server.listen(port);
console.log("Server is listening on port " + port);
