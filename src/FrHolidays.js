import useFetch from "./useFetch";

const FrHolidays = () => {

  const { data:fr, isPending, error } = useFetch('https://holidayapi.com/v1/holidays?pretty&country=FR&year=2020&key=6ed5a947-e77b-4b5f-8d89-f467c29db15a')

  
  // console.log(us)

  return (  
    <div className="FrHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { fr && (
        <div>
        <h2>France Holidays - 2020</h2>
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