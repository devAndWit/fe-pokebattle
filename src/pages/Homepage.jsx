import { useState } from "react";
import { Link } from "react-router-dom";
import { LeaderList } from "../components/LeaderList.jsx";
import { BattleList } from "../components/BattleList.jsx";

export const Homepage = () => {
  return (
    <>
      <div>
        <h1>Poke Battle Fight</h1>
        <div>
          <h2>LeadshiptBoard</h2>
          <div>
            <div className="missing">Table Top 10 Leadership</div>
            <LeaderList />
          </div>
          <h2>BattleList</h2>
          <div>
            <div className="missing">Table Top10 BattleList</div>
            <BattleList />
          </div>
        </div>
        <div>
          <div>
            <Link to={"/signup"}>SignUp</Link>
          </div>
          <div>
            <Link to={"/signin"}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
