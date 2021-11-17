import useFetch from "./useFetch";


const UkHolidays = () => {

  let key = `${process.env.REACT_APP_API_KEY}`


  const { data:uk, isPending, error } = useFetch(`https://holidayapi.com/v1/holidays?pretty&country=GB&year=2020&key=${key}`)

  // console.log(process.env.REACT_APP_API_KEY)
  // console.log(uk)

 
  return (  
    <div className="UkHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { uk && (
        <div>
        <h2>UK Holidays - 2020</h2>
        { uk.holidays.map((holidays, uuid) => (
          <div key={holidays.uuid}>
            <p style={{fontWeight: "600"}}>{holidays.name}</p>
            <p>{holidays.date}</p>
            
            <br />

          </div>
        ))
        }

        </div>
      ) }
    </div>
  );
}
 
export default UkHolidays;