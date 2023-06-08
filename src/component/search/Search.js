import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_url, geoApiOptions } from "../../geoDBapi";
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
          debounceTimeout={600}
          value = {search}
          onChange = {handleOnChange}
          loadOptions = {loadOptions}
          className = "searchBar"
          styles={
            {
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? 'orange' : '#F0EEF1',
            }),
            option: (baseStyles) =>(
              {
                ...baseStyles,
                color: '#F0EEF1',
              }
            ),

            
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 18,
            colors: {
              ...theme.colors,
              primary50: 'orange', //option
              primary25: 'orange',
              primary50: '#F0EEF1',
              primary: '#4d4d5h', // outline and current selection
              neutral0: '#4d4d5h',
              neutral20: '#F0EEF1', //line
              neutral60: 'orange',
              neutral30: 'orange', //outline when hover
              neutral40: '#F0EEF1', //no option font color
              neutral80: "#F0EEF1", //searchbar font color
              neutral50: '#F0EEF1' //defaulte value font color
            },
          })}
      />
    );
  }
  export default Search;