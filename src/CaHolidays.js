import useFetch from "./useFetch";

const CaHolidays = () => {

  const { data:ca, isPending, error } = useFetch('https://holidayapi.com/v1/holidays?pretty&country=CA&year=2020&key=6ed5a947-e77b-4b5f-8d89-f467c29db15a')

  
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