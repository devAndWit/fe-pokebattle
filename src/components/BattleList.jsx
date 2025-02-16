import { useEffect, useState } from "react";
import Mock_topBattleHistory from "../mocks/battleHistory.js";

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
    <div>
      {topBattleHistory.map((battle) => (
        <p key={battle._id + "02"} className="flex">
          <span className="w-full text-center">
            {battle.winner === battle.players.player1.userId
              ? "Winner"
              : "Loser"}
          </span>
          <span className="w-full text-center">
            {battle.players.player1.username}
          </span>
          <span className="w-full text-center">-</span>
          <span className="w-full text-center">
            {battle.winner === battle.players.player2.userId
              ? "Winner"
              : "Loser"}
          </span>
          <span className="w-full text-center">
            {battle.players.player2.username}
          </span>
        </p>
      ))}
    </div>
  );
};

export default BattleList;
