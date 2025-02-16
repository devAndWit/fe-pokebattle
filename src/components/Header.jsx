import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

import { UserMenu } from "./NavUserMenu.jsx";
import { VisitorMenu } from "./NavVisitorMenu.jsx";

import "./Header/header.css";

export const Header = () => {
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

export default Header;
