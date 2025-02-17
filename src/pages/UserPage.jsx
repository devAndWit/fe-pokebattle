import BattleList from "../components/BattleList";
import PokeList from "../components/PokeList";
import Profil from "../components/Profil";
import StartFight from "../components/StartFight";

export const UserPage = () => {
  return (
    <>
      <div>
        <Profil />
        <BattleList />
        <PokeList />
        <StartFight />
      </div>
    </>
  );
};

export default UserPage;
