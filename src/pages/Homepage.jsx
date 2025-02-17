import { LeaderList } from "../components/LeaderList.jsx";
import { BattleList } from "../components/BattleList.jsx";
import ControlBar from "../components/ControlBar.jsx";

import "../components/Homepage/homepage.css";

export const Homepage = () => {
  return (
    <>
      <div className="Hompage">
        <h1>Poke Battle Fight</h1>
        <LeaderList />
        <BattleList />
        <ControlBar />
      </div>
    </>
  );
};

export default Homepage;
