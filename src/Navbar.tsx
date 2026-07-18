import logo from './logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return ( 
    
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/uk-holidays">UK holidays</Link>
      </div>
    </nav>

    
   );
}
 
export default Navbar;