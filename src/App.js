import './App.css';
import React from "react";
import Search from './component/search/Search';
import CurrentWeather from './component/current-weather/current-weather';
function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  //const string = "Hello World";
  return (
    <div className="App">
      <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
      </div>
    
    </div>
  );
}

export default App;
