import { Link } from "react-router-dom";
import logo from "../assets/desktop/logo.svg";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} />
      </Link>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </header>
  );
};

export default Header;
