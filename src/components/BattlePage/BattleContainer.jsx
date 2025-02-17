import {BattleTeamList} from "./BattleTeamList/BattleTeamList.jsx";
import {useNavigate} from "react-router-dom";
import {Button, Container, LowerSection, Title, UpperSection} from "./styled.js";

export const BattleContainer = () => {
    const navigate = useNavigate();

    const handleBattleStart = (mode) => {
        navigate(`/arena?mode=${mode}`);
    };
  return (
    <>
      <div>BattlePage</div>
        <Container>
            <UpperSection>
                <Title>Choose Your Battle</Title>
                <Button onClick={() => handleBattleStart("pve")}>PVE Battle</Button>
                <Button onClick={() => handleBattleStart("pvp")}>PVP Battle</Button>
            </UpperSection>
            <LowerSection>
                <BattleTeamList />
            </LowerSection>
        </Container>
    </>
  );
};

export default BattleContainer;
