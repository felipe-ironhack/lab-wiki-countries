import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className='navbar-link' to='/'>
          LAB - Wiki Countries   
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
