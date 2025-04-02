import "./Nav.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    
   <div className="container">
  <img src="/images/IMG_7218.jpeg" alt="Minbild" className="profile-img" /> 
</div>

    <nav>
      <ul>
      <li><Link to="/">Hem</Link></li>
        <li><Link to="/about">Om mig</Link></li>
        <li><Link to="/projects">Projekter</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Kontakta mig</Link></li>
      </ul>
    </nav>
    
    </>
  );
};

export default NavBar;
