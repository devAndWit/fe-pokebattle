import { Link } from "react-router-dom";
import userIcon from "../assets/user_icon.png";

const UserMenu = () => {
  return (
    <>
      <search>
        <input type="text" placeholder="Search" className="" />
      </search>
      <nav>
        <div className="">
          <div tabIndex={0} role="" className="">
            <div className="">
              <img alt="" src={userIcon} />
            </div>
          </div>
          <ul tabIndex={0} className="">
            <li>
              <Link to={"/Home"} className="">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/MyRoster"} className="">
                My Roster
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
