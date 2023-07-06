import useFetch from "./useFetch";

const BeHolidays = () => {
  let key = `${process.env.REACT_APP_API_KEY}`
  const year = new Date().getFullYear()-1;

  const { data:be, isPending, error } = useFetch(`https://holidayapi.com/v1/holidays?pretty&country=BE&year=${year}&key=${key}`)

  
  // console.log(us)

  return (  
    <div className="UsHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { be && (
        <div>
        <h2>Belgium Holidays - {year}</h2>
        { be.holidays.map((holidays, uuid) => (
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
 
export default BeHolidays;