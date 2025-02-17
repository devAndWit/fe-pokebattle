import { Link } from "react-router-dom";

import "./ControlBar/controlBar.css";

const ControlBar = () => {
  return (
    <div className="ControlBar">
      <div>
        <Link to={"/signup"}>SignUp</Link>
      </div>
      <div>
        <Link to={"/signin"}>Login</Link>
      </div>
    </div>
  );
};

export default ControlBar;
