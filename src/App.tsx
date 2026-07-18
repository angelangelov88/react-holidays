import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import AllHolidays from './AllHolidays';
import CountryHolidays from './CountryHolidays';
import Footer from './Footer';

const countryRoutes = [
  { path: '/uk-holidays', countries: [{ code: 'GB', label: 'UK' }] },
  { path: '/us-holidays', countries: [{ code: 'US', label: 'US' }] },
  { path: '/de-holidays', countries: [{ code: 'DE', label: 'Germany' }] },
  { path: '/es-holidays', countries: [{ code: 'ES', label: 'Spain' }] },
  { path: '/ca-holidays', countries: [{ code: 'CA', label: 'Canada' }] },
  { path: '/fr-holidays', countries: [{ code: 'FR', label: 'France' }] },
  { path: '/be-holidays', countries: [{ code: 'BE', label: 'Belgium' }] },
  { path: '/au-holidays', countries: [{ code: 'AU', label: 'Australia' }] },
  { path: '/all-holidays', countries: [
    { code: 'GB', label: 'UK' },
    { code: 'US', label: 'US' },
    { code: 'DE', label: 'Germany' },
    { code: 'ES', label: 'Spain' },
    { code: 'CA', label: 'Canada' },
    { code: 'FR', label: 'France' },
    { code: 'BE', label: 'Belgium' },
    { code: 'AU', label: 'Australia' }
  ] }
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
        <div className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/all-holidays" element={<AllHolidays />} />
            {countryRoutes
              .filter(({ path }) => path !== '/all-holidays')
              .map(({ path, countries }) => (
                <Route key={path} path={path} element={<CountryHolidays countries={countries} />} />
              ))}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
