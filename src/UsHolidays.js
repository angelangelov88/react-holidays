import useFetch from "./useFetch";

const UsHolidays = () => {

  let key = `${process.env.REACT_APP_API_KEY}`

  const { data:us, isPending, error } = useFetch(`https://holidayapi.com/v1/holidays?pretty&country=US&year=2020&key=${key}`)

  
  // console.log(us)

  return (  
    <div className="UsHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { us && (
        <div>
        <h2>US Holidays - 2020</h2>
        { us.holidays.map((holidays, uuid) => (
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
 
export default UsHolidays;