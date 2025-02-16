import { Link } from "react-router-dom";

export const UserMenu = () => {
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
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default UserMenu;
