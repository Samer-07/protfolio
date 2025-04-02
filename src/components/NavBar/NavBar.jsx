import "./Nav.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <Link to = "/home">
   <div className="container">
  <img src="/images/IMG_7218.jpeg" alt="Minbild" className="profile-img" /> {/* تعديل هنا */}
</div>
</Link>
    <nav>
      <ul>
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
