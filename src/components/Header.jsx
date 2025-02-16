import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

import { NavUserMenu } from "./NavUserMenu.jsx";
import { NavVisitorMenu } from "./NavVisitorMenu.jsx";

import "./Header/header.css";

export const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <header className="">
        <div className="HeaderLeft">
          <Link to={"/"} className="">
            PokeBattle
          </Link>
        </div>
        <div className="HeaderRight">
          {isAuthenticated ? <NavUserMenu /> : <NavVisitorMenu />}
        </div>
      </header>
    </>
  );
};

export default Header;
