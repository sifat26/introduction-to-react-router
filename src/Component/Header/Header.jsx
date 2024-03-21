import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <div className="space-x-5">
          <Link to="">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to ='/Users'>Our Users</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
