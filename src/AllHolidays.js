import useFetch from "./useFetch";
import { useState } from "react";
import axios from "axios";
import { isCompositeComponent } from "react-dom/test-utils";

const AllHolidays = () => {
  let key = `${process.env.REACT_APP_API_KEY}`

  let urlAll = `https://holidayapi.com/v1/countries?pretty&key=${key}`


  const { data:all, isPending, error } = useFetch(urlAll)

  // const fetchAll = axios(`https://holidayapi.com/v1/countries?pretty&key=${key}`)

  // console.log(fetchAll)

  // const [res] = useState()

  const [countryCode] = useState("vf")
  console.log(countryCode)

  const [name, setName] = useState("")
  const [date, setDate] = useState("")

  const [res, setRes] = useState("")

  const clickHandler = (countryCode) => {


    console.log("Item clicked with country code: ", countryCode)

    let url = `https://holidayapi.com/v1/holidays?pretty&country=${countryCode}&year=2020&key=${key}`

    console.log("Item clicked with country code: ", countryCode)


    axios.get(url)
      .then(response => {
        const res = response.data
        console.log("response: ", res)
        setRes(res.holidays)
        console.log(res)
        setName(res.holidays[8].name)
        setDate(res.holidays[8].date)
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
        <div>
        <h2>All Countries</h2>
        <br />
        { all.countries.map((countries, code) => (
          <div key={countries.code}>
            <div style={{fontWeight: "600"}}>{countries.name}</div>

            {/* <p>{countries.code}</p> */}
            <p value={countryCode}>{countries.code}</p>
            <br />
            {/* <ToggleComponent /> */}
            <p></p>
            <button onClick={() => clickHandler(countries.code)}>Show Holidays for {countries.name}</button>
          </div>
        ))
        }
        <>
          {console.log(res)}
          {res &&
            res.map((holiday) => (
            <>
            {holiday.name}
            <br />
            {holiday.date}
            <br />
            </>
          ))}
              

          </>
        </div>
      ) }



    </div>
  );
}





  export default AllHolidays