import { Link, Outlet } from "react-router-dom";
import "../components/CSS/navbar.css";

const Parent = () => {
  const toggleNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    navbar.classList.toggle("show");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutme" className="nav-link">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Parent;