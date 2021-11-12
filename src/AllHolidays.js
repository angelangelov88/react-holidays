import useFetch from "./useFetch";

const AllHolidays = () => {

  const { data:all, isPending, error } = useFetch('https://holidayapi.com/v1/countries?pretty&key=6ed5a947-e77b-4b5f-8d89-f467c29db15a')

  
  // console.log(all)
  let country = null
  const FetchCountry = () => {
    useFetch('https://holidayapi.com/v1/holidays?pretty&country=${country}&year=2020&key=6ed5a947-e77b-4b5f-8d89-f467c29db15a')
  }
 
  return (  
    <div className="AllHolidays">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { all && (
        <div>
        <h2>All Countries</h2>
        <br />
        { all.countries.map((countries, uuid) => (
          <div key={countries.uuid}>
            <button onClick={FetchCountry} style={{fontWeight: "600"}}>{countries.name}

            </button>
            <p>{countries.date}</p>
            <br />
          </div>
        ))
        }
        </div>
      ) }
    </div>
  );
}




  export default AllHolidays