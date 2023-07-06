import useFetch from "./useFetch";

const CaHolidays = () => {
  let key = `${process.env.REACT_APP_API_KEY}`
  const year = new Date().getFullYear()-1;

  const { data:ca, isPending, error } = useFetch(`https://holidayapi.com/v1/holidays?pretty&country=CA&year=${year}&key=${key}`)

  
  // console.log(us)

  return (  
    <div className="CaHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { ca && (
        <div>
        <h2>Canada Holidays - {year}</h2>
        { ca.holidays.map((holidays, uuid) => (
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
 
export default CaHolidays;