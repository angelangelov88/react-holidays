import { NavLink } from 'react-router-dom';
import { countryRoutes } from './App';

const Home = () => {

  return ( 
    <div className="home">
      <h2>Please choose your country:</h2>
      <div className="home-tabs">
        {countryRoutes.map(route => (
          <NavLink key={route.path} to={route.path} className={({ isActive }) => `country-tab ${isActive ? 'active' : ''}`}>
            {route.path === '/all-holidays' ? 'All' : route.countries[0].label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}


export default Home;