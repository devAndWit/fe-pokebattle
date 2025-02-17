import { Link } from "react-router-dom";

export const StartFight = () => {
  return (
    <>
      <div>
        <Link to={"/battle"}>Startbattle</Link>
      </div>
    </>
  );
};

export default StartFight;
