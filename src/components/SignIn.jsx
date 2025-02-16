import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../api/authApi";
import { useAuth } from "../contexts/AuthContext";

import "./SignIn/signin.css";

// import { login } from "../contexts/AuthContext";

export const SignIn = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const { setIsAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleInput = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await signIn(formState.email, formState.password);

      if (!loginResponse) {
        setIsAuthenticated(false);
        return;
      }

      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    }
  };

  return (
    <>
      <div className="signin">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="formContent">
            
              <p>
                <label htmlFor="email">EMail:</label>
                <input
                  type="email"
                  placeholder="EMail"
                  name="email"
                  id="email"
                  onChange={handleInput}
                  value={formState.email}
                  required
                />
              </p>

              <p>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={handleInput}
                  value={formState.password}
                  required
                />
              </p>

              <p className="control">
                <button type="submit">Login</button>
                <Link to="/signup">SignUp</Link>
              </p>
            
          </div>
        </form>
        <p>testuser</p>
        <p>test@test.com</p>
        <p>!Password1</p>
      </div>
    </>
  );
};

export default SignIn;
