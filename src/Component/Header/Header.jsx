import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="space-x-5 ">
          <NavLink to="">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to ='/Users'>Our Users</NavLink>
          <NavLink to ='/Posts'>Posts</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
