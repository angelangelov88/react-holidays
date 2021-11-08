import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import ListCountries from './ListCountries'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <ListCountries /> */}
      </div>

    </div>
  );
}




export default App;
