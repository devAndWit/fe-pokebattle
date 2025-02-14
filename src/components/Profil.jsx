import userIcon from "../assets/user_icon.png";
export const Profil = () => {
  return (
    <>
      <div>
        <h1>Profil</h1>
        <img src={userIcon} alt="usericon" />
        <div>
          <p>
            <span>Username:</span>
            <span>username</span>
          </p>
        </div>
        <div>
          <p>
            <span>Rating:</span>
            <span>rating</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Profil;
