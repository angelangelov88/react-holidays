import useFetch from "./useFetch";

const UsHolidays = () => {

  const { data:us, isPending, error } = useFetch('https://holidayapi.com/v1/holidays?pretty&country=US&year=2020&key=6ed5a947-e77b-4b5f-8d89-f467c29db15a')

  
  // console.log(us)

  return (  
    <div className="UsHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { us && (
        <div>
        <h2>US Holidays - 2020</h2>
        { us.holidays.map((holidays, uuid) => (
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
 
export default UsHolidays;