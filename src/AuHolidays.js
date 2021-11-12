import useFetch from "./useFetch";

const AuHolidays = () => {

  const { data:au, isPending, error } = useFetch('https://holidayapi.com/v1/holidays?pretty&country=AU&year=2020&key=6ed5a947-e77b-4b5f-8d89-f467c29db15a')

  
  // console.log(us)

  return (  
    <div className="AuHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { au && (
        <div>
        <h2>Australia Holidays - 2020</h2>
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