import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

import logoNasa from "../../assets/nasa_logo.png";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <header>
      <a href="https://api.nasa.gov/" target="_blank"><img className="logo" src={logoNasa} alt="logo-nasa" /></a>

      {user !== null && <h1>Welcome {user.charAt(0).toUpperCase() + user.slice(1)}</h1>}

      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={() =>
                user === null && alert("Please enter your name to begin")
              }
            >
              Home
            </NavLink>
            {user !== null && <NavLink to="/Content">AID</NavLink>}
          </li>
          {user !== null && (
            <li>
              <button
                onClick={() => {
                  setUser(null);
                  navigate("/");
                }}
              >
                Finish
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
