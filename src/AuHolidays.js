import useFetch from "./useFetch";

const AuHolidays = () => {
  let key = `${process.env.REACT_APP_API_KEY}`
  const year = new Date().getFullYear()-1;

  const { data:au, isPending, error } = useFetch(`https://holidayapi.com/v1/holidays?pretty&country=AU&year=${year}&key=${key}`)

  
  // console.log(us)

  return (  
    <div className="AuHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { au && (
        <div>
        <h2>Australia Holidays - {year}</h2>
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