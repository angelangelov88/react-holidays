import { useState } from "react";
import FetchData from "./ListCountries";

const Home = () => {

  const [name, setName] = useState('Angel')

  const handleClick = () => {
    setName('Mario')
  }

  return ( 
    <div className="home">
      <h2>Please choose your country:</h2>
      <button>UK</button>
      <button>US</button>
      <button>Germany</button>
      <button>Canada</button>
      <button>Spain</button>
      <button>France</button>
      <button>Belgium</button>
      <button>Portugal</button>

    </div>
  );
}


export default Home;