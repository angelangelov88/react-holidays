import useFetch from "./useFetch";

const FrHolidays = () => {
  let key = `${process.env.REACT_APP_API_KEY}`
  const year = new Date().getFullYear()-1;

  const { data:fr, isPending, error } = useFetch(`https://holidayapi.com/v1/holidays?pretty&country=FR&year=${year}&key=${key}`)

  
  // console.log(us)

  return (  
    <div className="FrHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { fr && (
        <div>
        <h2>France Holidays - {year}</h2>
        { fr.holidays.map((holidays, uuid) => (
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
 
export default FrHolidays;