import { useEffect, useState } from "react";
import top10 from "../mocks/topUsers.js";

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
    <div>
      <p className="flex">
        <span className="w-full">{"Place:"}</span>
        <span className="w-full text-center">{"Username"}</span>
        <span className="w-full text-center">{"Rating"}</span>
      </p>
      {topUsers.map((user, index) => (
        <p key={user._id} className="flex">
          <span className="w-full">{index + 1}.</span>
          <span className="w-full text-center">{user.username}</span>
          <span className="w-full text-center">{user.rating}</span>
        </p>
      ))}
    </div>
  );
};

export default LeaderList;
