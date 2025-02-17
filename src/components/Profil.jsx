import { useEffect, useState } from "react";
import { getUserById } from "../api/userApi";
import { getPokemonListById } from "../helpers/getPokemonListById.js";
import { useUser } from "../contexts/UserContext.jsx";
import userIcon from "../assets/user_icon.png";
import "./Profil/profil.css";

export const Profil = () => {
  const [userData, setUserData] = useState(null);
  const [pokeList, setPokeList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUser();

  console.log(user);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);

    const userId = localStorage.getItem("userId");

    try {
      const response = await getUserById(userId);
      if (!response) {
        console.log("400: User not found.");
        return;
      }

      console.log(response);
      setUserData({
        username: response.username,
        email: response.email,
        rating: response.rating,
        pokecoin: response.pokeCoin,
        pokeList: response.pokeList,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserPokeList = async () => {
    setLoading(true);
    setError(null);

    const userId = localStorage.getItem("userId");

    try {
      const response = await getPokemonListById(userId);
      if (!response) {
        console.log("400: User not found.");
        return;
      }
      setPokeList(response.data);
      console.log(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchUserPokeList();
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
              <span>{userData.username}</span>
            </p>
            <p>
              <span>Email:</span>
              <span>{userData.email}</span>
            </p>
            <p>
              <span>Rating:</span>
              <span>{userData.rating}</span>
            </p>
            <p>
              <span>Pokecoin:</span>
              <span>{userData.pokecoin}</span>
            </p>

            {/*
        pokeList: response.pokeList, */}
          </div>
        </div>

        <div className="ProfilPokeList"></div>
      </div>
    </>
  );
};

export default Profil;
