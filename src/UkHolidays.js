import useFetch from "./useFetch";

const UkHolidays = () => {
// I used useFetch method to fetch the data from the API and render it 
  let key = `${process.env.REACT_APP_API_KEY}`
  const year = new Date().getFullYear()-1;

  const { data:uk, isPending, error } = useFetch(`https://holidayapi.com/v1/holidays?pretty&country=GB&year=${year}&key=${key}`)
 
  return (  
    <div className="UkHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { uk && (
        <div>
        <h2>UK Holidays - {year}</h2>
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