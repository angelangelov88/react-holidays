import { Link } from 'react-router-dom'


const Home = () => {

  // const { data, isPending, error } = useFetch('https://holidayapi.com/v1/holidays?pretty&country=GB&year=2020&key=6ed5a947-e77b-4b5f-8d89-f467c29db15a')

  return ( 
    <div className="home">
    {/* { error && <div>{ error }</div>}
    { isPending && <div>Loading...</div>}
    { data && <AllHolidays />} */}
      <h2>Please choose your country:</h2>
      <button>
        <Link to="/uk-holidays">UK</Link>
      </button>
      <button>
        <Link to="/us-holidays">US</Link>
      </button>
      <button>
        <Link to="/de-holidays">Germany</Link>
      </button>
      <button>
        <Link to="/es-holidays">Spain</Link>
      </button>
      <button>
        <Link to="/ca-holidays">Canada</Link>
      </button>
      <button>
        <Link to="/fr-holidays">France</Link>
      </button>
      <button>
        <Link to="/be-holidays">Belgium</Link>
      </button>
      <button>
        <Link to="/au-holidays">Australia</Link>
      </button>
      <button>
        <Link to="/all-holidays">All</Link>
      </button>


    </div>
  );
}


export default Home;