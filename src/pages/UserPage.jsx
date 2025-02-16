import BattleList from "../components/BattleList";
import PokeList from "../components/PokeList";
import Profil from "../components/Profil";
import StartFight from "../components/StartFight";

export const UserPage = () => {
  return (
    <>
      <Profil />
      <BattleList />
      <PokeList />
      <StartFight />
    </>
  );
};

export default UserPage;
