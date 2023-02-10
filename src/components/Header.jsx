import { Link } from "react-router-dom";
import logo from "../assets/desktop/logo.svg";
const Header = () => {
  return (
    <header>
      <nav>
        {" "}
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </nav>
    </header>
  );
};

export default Header;
