import { Link } from "react-router-dom";
import { UserMenu } from "./UserMenu.jsx";

const Navbar = () => {
  return (
    <header className="">
      <UserMenu />
      <div className="">
        <Link to={"/"} className="">
          PokeBattle
        </Link>
      </div>
      <div className=""></div>
    </header>
  );
};

export default Navbar;
