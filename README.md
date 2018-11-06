# React Weather App (take two)

This React app allows you to search for current weather by city or zipcode. I used OpenWeatherMap's API for weather data.

# To get started:

1. Terminal 1-  
   npm install  
   npm run client

2. Terminal 2 (not necessary until server.js is functional)-  
   ~./cd server  
   npm install  
   npm run start

3. Create .env file within client folder that includes:  
   REACT_APP_API_KEY='personal api key'

# To do:

- [x] Use Create-React-App to set up initial scaffolding.
- [x] Search functionality by zipcode and city, returning current weather data(city, country, current temp, humidity, weather conditions).
- [x] Hardcoded rendering of the first index of five day forecast array (meant to be a placeholder).
- [x] I used lodash .groupBy and moment to write a function in App.js that groups the five days together.
- [ ] Render five day forecast to the dom with functionality for calculating highest and lowest temps for each day.
- [ ] Finish server.js (currently it is not affecting the client side, but I would like this proxy server to be able to get data from the client side, manipulate it, send it back.
- [ ] Once my server.js is functional, I need to get my .env file out of the client side.
- [ ] Convert the date to a day of the week with .getDay().
- [ ] Restrict to US only.
- [ ] Convert temps from decimal to whole number.
- [ ] Chart weather data with D3 or Formidable Labs (recommendation from Gavin).

# Tech Stack

- React
- JavaScript(ES6)
- HTML 5

# Resources

1. React tutorial: https://www.youtube.com/watch?v=204C9yNeOYI
2. OpenWeatherMap docs- https://openweathermap.org
3. Noteworthy packages: create-react-app, lodash, moment, axious (Gavin suggested axious- it's similar to fetch but boasts better data manipulation)
4. Friends/mentors: Eddie, Gavin, Michelle, Don
