
import { Link, useLocation } from "react-router-dom";
import logo from '../img/enigma.png'

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="brand">
      <img src={logo} />
        <h1>ENIGMA</h1>
      </div>
      <div className="links">
        <Link to="/" >Home</Link>
        <Link to="/create">New</Link>
      </div>
    </nav>
  );
};

export default Navbar;
