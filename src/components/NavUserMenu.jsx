import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import "./Nav/Nav.css";

export const NavUserMenu = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/signin");
  };

  return (
    <>
      <nav>
        <ul className="UlMenu">
          <li>
            <Link to={"/"} className="">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/mypokemon"} className="">
              mypokemon
            </Link>
          </li>
          <li>
            <Link to={"/PokeDex"} className="">
              PokeDex
            </Link>
          </li>
          <li>
            <Link to={"/LeaderBoard"} className="">
              Leader Board
            </Link>
          </li>

          <li>
            <Link to={"/PokeLuck"} className="">
              Poke Luck
            </Link>
          </li>
        </ul>
        <ul className="UlControl">
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavUserMenu;
