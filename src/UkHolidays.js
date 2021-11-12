import useFetch from "./useFetch";

const UkHolidays = () => {


  const { data:uk, isPending, error } = useFetch('https://holidayapi.com/v1/holidays?pretty&country=GB&year=2020&key=6ed5a947-e77b-4b5f-8d89-f467c29db15a')

  
  // console.log(uk)

 
  return (  
    <div className="UkHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { uk && (
        <div>
        <h2>UK Holidays - 2020</h2>
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