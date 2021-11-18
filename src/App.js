import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './About';
import UkHolidays from './UkHolidays';
import UsHolidays from './UsHolidays';
import AllHolidays from './AllHolidays';
import AuHolidays from './AuHolidays';
import BeHolidays from './BeHolidays';
import EsHolidays from './EsHolidays';
import FrHolidays from './FrHolidays';
import DeHolidays from './DeHolidays';
import CaHolidays from './CaHolidays';
import Footer from './Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <div className="content">
          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
            <Route path="/about">
              <About />
            </Route>
            <Route path="/uk-holidays">
              <UkHolidays />
            </Route>
            <Route path="/us-holidays">
              <UsHolidays />
            </Route>
            <Route path="/de-holidays">
              <DeHolidays />
            </Route>
            <Route path="/es-holidays">
              <EsHolidays />
            </Route>
            <Route path="/ca-holidays">
              <CaHolidays />
            </Route>
            <Route path="/fr-holidays">
              <FrHolidays />
            </Route>
            <Route path="/be-holidays">
              <BeHolidays />
            </Route>
            <Route path="/au-holidays">
              <AuHolidays />
            </Route>
            <Route path="/all-holidays">
              <AllHolidays />
            </Route>
          </Switch>
        </div>
        <Footer />

      </div>

    </Router>

  );
}



export default App;
