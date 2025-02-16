import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const VisitorMenu = () => {
  
  return (
    <>
      <i>VisitorMenu</i>
      <hr />
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

export default VisitorMenu;
