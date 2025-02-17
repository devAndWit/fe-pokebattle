import { useEffect, useState } from "react";
import { getUserById } from "../api/userApi";
import { useUser } from "../contexts/UserContext.jsx";
import userIcon from "../assets/user_icon.png";
import "./Profil/profil.css";

export const Profil = () => {
  const [userdata, setUserData] = useState({
    username: "",
    ranking: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUser();

  console.log(user);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);

    const userID = "67af676072997bd30fa5bc10";

    try {
      const response = await getUserById(userID);
      if (!response) {
        console.log("400: User not found.");
        return;
      }
      console.log(response);
      setUserData({
        username: response.username,
        email: response.email,
        rating: response.rating,
        pokecoin: response.pokecoin,
        pokeList: response.pokeList,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) return <p>Lade Daten...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <div className="Profil">
        <h1>Profil</h1>
        <div className="ProfilContent">
          <img src={userIcon} alt="usericon" className="smallIcon" />
          <div className="UserInfo">
            <p>
              <span>Username:</span>
              <span>username</span>
            </p>
            <p>
              <span>Rating:</span>
              <span>rating</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
