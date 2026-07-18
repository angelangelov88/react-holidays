import { NavLink } from "react-router-dom";


const Home = () => {

  return ( 
    <div className="home">
      <h2>Please choose your country:</h2>
      <div className="home-tabs">
        <NavLink to="/uk-holidays" className={({ isActive}: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>UK</NavLink>
        <NavLink to="/us-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>US</NavLink>
        <NavLink to="/de-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>Germany</NavLink>
        <NavLink to="/es-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>Spain</NavLink>
        <NavLink to="/ca-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>Canada</NavLink>
        <NavLink to="/fr-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>France</NavLink>
        <NavLink to="/be-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>Belgium</NavLink>
        <NavLink to="/au-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>Australia</NavLink>
        <NavLink to="/all-holidays" className={({ isActive }: { isActive: boolean }) => isActive ? 'country-tab active' : 'country-tab'}>All</NavLink>
      </div>
    </div>
  );
}


export default Home;