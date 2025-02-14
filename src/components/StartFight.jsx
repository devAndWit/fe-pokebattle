import { Link } from "react-router-dom";

export const StartFight = () => {
  return (
    <>
      <div>
        <Link to={"/battlepage"}>Startbattle</Link>
      </div>
    </>
  );
};

export default StartFight;
