import useFetch from "./useFetch";

const CaHolidays = () => {
  let key = `${process.env.REACT_APP_API_KEY}`

  const { data:ca, isPending, error } = useFetch(`https://holidayapi.com/v1/holidays?pretty&country=CA&year=2020&key=${key}`)

  
  // console.log(us)

  return (  
    <div className="CaHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { ca && (
        <div>
        <h2>Canada Holidays - 2020</h2>
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