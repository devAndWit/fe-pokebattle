import { useEffect, useState } from "react";
import Mock_topBattleHistory from "../mocks/battleHistory.js";

import "./BattleList/battleList.css";

export const BattleList = () => {
  const [topBattleHistory, setTopBattleHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setTopBattleHistory(Mock_topBattleHistory);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []); // ✅ Läuft nur einmal beim Laden

  if (loading) return <p>Lade Daten...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="BattleListStyle">
      <h2>BattleList</h2>
      <h3>Table Top10 BattleList</h3>

      <div className="table">
        <div className="headline">
          <div className="row">
            <div className="cell">{"Team"}</div>
            <div className="cell">{"Status"}</div>
            <div className="cell">{"User"}</div>
            <div className="cell arrow max-w-1rem">&nbsp;</div>
            <div className="cell">{"User"}</div>
            <div className="cell">{"Status"}</div>
            <div className="cell">{"Team"}</div>
          </div>
        </div>

        <div className="data">
          {topBattleHistory.map((battle) => (
            <div key={battle._id + "02"} className="row">
              <div className="cell">
                <span>Poke1</span>
                <span>Poke2</span>
                <span>Poke3</span>
              </div>
              <div className="cell">
                {battle.winner === battle.players.player1.userId
                  ? "✮ Win ✮"
                  : "Lose"}
              </div>
              <div className="cell">{battle.players.player1.username}</div>
              <div className="cell arrow max-w-1rem">
                {battle.winner === battle.players.player1.userId ? "⟸" : "⟹"}
              </div>
              <div className="cell">{battle.players.player2.username}</div>
              <div className="cell">
                {battle.winner === battle.players.player2.userId
                  ? "✮ Win ✮"
                  : "Lose"}
              </div>
              <div className="cell">
                <span>Poke1</span>
                <span>Poke2</span>
                <span>Poke3</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BattleList;
