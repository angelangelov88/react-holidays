import useFetch from "./useFetch";

const EsHolidays = () => {
  let key = `${process.env.REACT_APP_API_KEY}`

  const { data:es, isPending, error } = useFetch(`https://holidayapi.com/v1/holidays?pretty&country=ES&year=2020&key=${key}`)

  
  // console.log(us)

  return (  
    <div className="UsHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { es && (
        <div>
        <h2>Spain Holidays - 2020</h2>
        { es.holidays.map((holidays, uuid) => (
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
 
export default EsHolidays;