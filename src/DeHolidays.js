import useFetch from "./useFetch";

const DeHolidays = () => {
  let key = `${process.env.REACT_APP_API_KEY}`

  const { data:de, isPending, error } = useFetch(`https://holidayapi.com/v1/holidays?pretty&country=DE&year=2021&key=${key}`)

  
  // console.log(us)

  return (  
    <div className="DeHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { de && (
        <div>
        <h2>Germany Holidays - 2021</h2>
        { de.holidays.map((holidays, uuid) => (
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
 
export default DeHolidays;