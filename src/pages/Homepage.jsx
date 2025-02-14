import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <>
      <i className="">Homepage</i>
      <hr />
      <div>
        <h1>Poke Battle Fight</h1>
        <div>
          <h2>LeadshiptBoard</h2>
          <div>
            <div className="missing">Table Top 10 Leadership</div>
          </div>
          <h2>BattleList</h2>
          <div>
            <div className="missing">Table Top10 BattleList</div>
          </div>
        </div>
        <div>
          <div>
            <Link to={"/signup"}>SignUp</Link>
          </div>
          <div>
            <Link to={"/signin"}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
