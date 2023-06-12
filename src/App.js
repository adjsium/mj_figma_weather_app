import './App.css';
import React, { useState } from "react";
import Search from './component/search/Search';
import CurrentWeather from './component/current-weather/current-weather';
import  Forecast  from './component/forecast/forecast';
import { ONE_CALL_URL } from "./geoDBapi";



function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [onecall, setOneCall] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const oneCallFetch = fetch(`${ONE_CALL_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`);
    Promise.all([oneCallFetch])
      .then(async (response) => {
        const oneCallResponse = await response[0].json();
        setCurrentWeather({ city: searchData.label, ...oneCallResponse });
        setForecast({ city: searchData.label, ...oneCallResponse });
        setOneCall({ city: searchData.label, ...oneCallResponse });
      })
      .catch(console.log);
  }

  return (
    <div className="App">
      <div className="main-container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={onecall}/>}
        {forecast && <Forecast data={onecall}/>}
      </div>

    </div>
  );
}

export default App;
