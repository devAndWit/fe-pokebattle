import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const UserMenu = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/signin");
  };

  return (
    <>
      <i>UserMenu</i>
      <hr />
      <nav>
        <div className="">
          <ul tabIndex={0} className="">
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
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default UserMenu;
