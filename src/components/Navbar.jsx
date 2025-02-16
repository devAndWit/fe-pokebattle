import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import { UserMenu } from "./UserMenu.jsx";
import { VisitorMenu } from "./VisitorMenu.jsx";

export const Navbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <header className="">
        <div className="">
          <Link to={"/"} className="">
            PokeBattle
          </Link>
        </div>
        <div className="">
          {isAuthenticated ? <UserMenu /> : <VisitorMenu />}
        </div>
      </header>
    </>
  );
};

export default Navbar;
