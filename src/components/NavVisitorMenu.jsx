import { Link } from "react-router-dom";

export const NavVisitorMenu = () => {
  return (
    <>
      <nav>
        <ul className="">
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
          <li>
            <Link to={"/signin"}>Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavVisitorMenu;
