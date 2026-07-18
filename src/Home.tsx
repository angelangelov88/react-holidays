import { NavLink } from 'react-router-dom'


const Home = () => {

  return ( 
    <div className="home">
      <h2>Please choose your country:</h2>
      <div className="home-tabs">
        <NavLink end to="/uk-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>UK</NavLink>
        <NavLink end to="/us-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>US</NavLink>
        <NavLink end to="/de-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>Germany</NavLink>
        <NavLink end to="/es-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>Spain</NavLink>
        <NavLink end to="/ca-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>Canada</NavLink>
        <NavLink end to="/fr-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>France</NavLink>
        <NavLink end to="/be-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>Belgium</NavLink>
        <NavLink end to="/au-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>Australia</NavLink>
        <NavLink end to="/all-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>All</NavLink>
      </div>
    </div>
  );
}


export default Home;