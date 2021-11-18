import { Link } from 'react-router-dom'


const Home = () => {

  return ( 
    <div className="home">
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