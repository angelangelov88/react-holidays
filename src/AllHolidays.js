import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Fuse from "fuse.js";


const AllHolidays = () => {
  //My key for the API requests is saved in env file
  let key = `${process.env.REACT_APP_API_KEY}`

  //This is the url to extract the data for all countries
  let urlAll = `https://holidayapi.com/v1/countries?pretty&key=${key}`
  
  //I set state to ensure data can be manipulated with later
  //all is the whole data from the API - countries + holidays
  //data is the value of the data in the search
  const [all, setAll] = useState("")
  const [data, setData] = useState([])
  const countriesArray = all.countries

  //Axios request to fetch the data from the Holidays API
  useEffect(() => {
  axios.get(urlAll)
  .then(response => {
      setAll(response.data)
      setData(response.data.countries)
      console.log(data)
  })
  .catch((err) => {
    console.log(err)
  }) 
  }, [])

  //Axios request to fetch the holidays per country
  const [res, setRes] = useState("")

  const clickHandler = (countryCode) => {
  let url = `https://holidayapi.com/v1/holidays?pretty&country=${countryCode}&year=2020&key=${key}`

  axios.get(url)
    .then(response => {
      const res = response.data
      // console.log("response: ", res)
      setRes(res.holidays)
      // console.log(res)
    })
    .catch((err) => {
      console.log(err)
    }) 
  }

  //Function to search in the array
  //This part sets the value of the data const in order to show the countries even if empty search input is detected
  const searchData = (pattern) => {
    if (!pattern) {
      setData(countriesArray)
      return
    }
    //Import Fuse.js library to the project and make sure that the search works by adding some custom settings
    const fuse = new Fuse(data, {
      keys: ["name"],
      threshold: 0,
      ignoreLocation: true
    })
    const result = fuse.search(pattern)
    const matches = []
    //If there is an input it should show the results or show empty array 
    if (!result.length) {
      setData([])
    } else {
      result.forEach(({item}) => {
        matches.push(item)
      })
      setData(matches)
    }
  }  

  return (  
    <div className="AllHolidays">
      { all && (
      <div className="allCountriesContainer">
        <div className="allCountriesList">
          <div>
          {/* This is the search bar component */}
            <SearchBar
              placeholder="Search"
              onChange={(e) => searchData(e.target.value)}
            />
            <br />
          </div>
          <h2>All Countries</h2>
          <br />
          {/* Map the data from the axios request and show all the countries */}
          { data.map((countries, code) => (
            <div key={countries.code}>
              <div style={{fontWeight: "600"}}>{countries.name}</div>
              <button onClick={() => clickHandler(countries.code)}>Show List</button>
              <br />
              <p>&nbsp;</p>              
            </div>
          ))}
        </div>
        <div className="holidays">
        {/* Map the holidays per country. It gets implemented on click */}
          {res &&
            res.map((holiday) => (
            <div key={holiday.name}>
              {holiday.name}
              <br />
              {holiday.date}
              <p>&nbsp;</p>
            </div>
            ))}
        </div>
      </div>
      )}
      <br />
    </div>
  );
}

  export default AllHolidays