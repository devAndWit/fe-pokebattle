import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const VisitorMenu = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const { login } = useContext(AuthContext);

  const handleInput = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(formState);
    success && document.getElementById("my_modal_1").close();
  };

  return (
    <>
      <i>VisitorMenu</i>
      <hr />
      <nav>
        <ul className="">
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
          <li>
            <Link to={"/signin"}>Login</Link>
          </li>
        </ul>
      </nav>
      <dialog id="my_modal_1" className="">
        <form method="" onSubmit={handleSubmit}>
          <fieldset className="">
            <legend className="">Login</legend>

            <label className="">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              value={formState.email}
              onChange={handleInput}
            />

            <label className="">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleInput}
            />

            <div className="">
              <button className="" type="submit">
                Login
              </button>
              <button
                className=""
                type=""
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Close
              </button>
            </div>
          </fieldset>
        </form>
      </dialog>
    </>
  );
};

export default VisitorMenu;
