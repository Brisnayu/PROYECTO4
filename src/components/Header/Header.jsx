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
      <img className="logo" src={logoNasa} alt="logo-nasa" />

      {user !== null && <h1>Bienvenido {user}</h1>}

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Content">IADD</NavLink>
          </li>
          {user !== null && (
            <li>
              <button
                onClick={() => {
                  setUser(null);
                  navigate("/");
                }}
              >
                Reiniciar
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
