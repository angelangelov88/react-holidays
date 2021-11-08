import logo from './logo.jpg'

const Navbar = () => {

  return ( 
    
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/uk-holidays">UK Holidays</a>
        <a href="/us-holidays">US Holidays</a>

      </div>
    </nav>
   );
}
 
export default Navbar;