import useFetch from "./useFetch";

const AuHolidays = () => {
  let key = `${process.env.REACT_APP_API_KEY}`

  const { data:au, isPending, error } = useFetch(`https://holidayapi.com/v1/holidays?pretty&country=AU&year=2021&key=${key}`)

  
  // console.log(us)

  return (  
    <div className="AuHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { au && (
        <div>
        <h2>Australia Holidays - 2021</h2>
        { au.holidays.map((holidays, uuid) => (
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
 
export default AuHolidays;