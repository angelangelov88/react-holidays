import useFetch from "./useFetch";
import { useState } from "react";
import axios from "axios";

const AllHolidays = () => {
  let key = `${process.env.REACT_APP_API_KEY}`

  let urlAll = `https://holidayapi.com/v1/countries?pretty&key=${key}`


  const { data:all, isPending, error } = useFetch(urlAll)

  // const fetchAll = axios(`https://holidayapi.com/v1/countries?pretty&key=${key}`)

  // console.log(fetchAll)

  // const [res] = useState()

  // const [countryCode] = useState("vf")
  // console.log(countryCode)

  const [res, setRes] = useState("")


  const clickHandler = (countryCode) => {


    // console.log("Item clicked with country code: ", countryCode)

    let url = `https://holidayapi.com/v1/holidays?pretty&country=${countryCode}&year=2020&key=${key}`

    // console.log("Item clicked with country code: ", countryCode)


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


  return (  
    <div className="AllHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { all && (
        <div className="allCountriesContainer">
          <div className="allCountriesList">
          <h2>All Countries</h2>
          <br />
          { all.countries.map((countries, code) => (
          <div key={countries.code}>
            <div style={{fontWeight: "600"}}>{countries.name}</div>
            <button onClick={() => clickHandler(countries.code)}>Show List</button>
            <br />
            <p>&nbsp;</p>
          </div>
          ))
          }
          </div>
          <div className="holidays">
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