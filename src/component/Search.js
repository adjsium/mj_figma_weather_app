import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_url, geoApiOptions } from "../geoDBapi";
const Search = ({onSearchChange}) => {

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) =>{
      setSearch(searchData);
      onSearchChange(searchData);
    }


    return (
      <AsyncPaginate 
          placeholder = "Search for City!"
          debounceTimeout={1200}
          value = {search}
          onChange = {handleOnChange}
          loadOptions = {loadOptions}
      />
    );
  }
  export default Search;