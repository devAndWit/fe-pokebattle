import { useEffect, useState } from "react";
import top10 from "../mocks/topUsers.js";

import "./LeaderList/leaderList.css";

export const LeaderList = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setTopUsers(top10);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []); // ✅ Läuft nur einmal beim Laden

  if (loading) return <p>Lade Daten...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="LeaderListStyle">
      <h2>LeadshiptBoard</h2>
      <h3>Table Top 10 Leadership</h3>

      <div className="table">
        <div className="headline">
          <div className="row">
            <div className="cell">{"Place"}</div>
            <div className="cell">{"Username"}</div>
            <div className="cell">{"Rating"}</div>
          </div>
        </div>

        
        <div className="data">
          {topUsers.map((user, index) => (
            <div key={user._id} className="row">
              <div className="cell">{index + 1}.</div>
              <div className="cell">{user.username}</div>
              <div className="cell">{user.rating}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderList;
