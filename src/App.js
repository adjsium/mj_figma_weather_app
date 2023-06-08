import './App.css';
import React from "react";
import Search from './component/Search';
function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  //const string = "Hello World";
  return (
    <div className="App">
    <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
