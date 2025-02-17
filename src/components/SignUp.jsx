import { useState } from "react";
import { signUp } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import "./Signup/signup.css";

export const SignUp = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const { setIsAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleInput = async (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirmPassword.trim() === formState.password.trim()) {
      const signUpResponse = await signUp(
        formState.email,
        formState.password,
        formState.username
      );

      if (!signUpResponse || !signUpResponse.statusText === "ok") {
        console.log("400: Error in Userregistration.");
        return;
      }
      setIsAuthenticated(true);
      navigate("/signin");
    } else {
      console.log("500: Error in Userregistration.");
      return;
    }
  };

  return (
    <>
      <div className="signup">
        <h2>Registration</h2>

        <form action="" onSubmit={handleSubmit}>
          <div className="formContent">
            <p>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                onChange={handleInput}
                value={formState.username}
                required
              />
            </p>
            <p>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleInput}
                value={formState.email}
                required
              />
            </p>
            <p>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                minLength="8"
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\#\?!\@\$%^&*\-]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter and a special character (#?!@$ %^&*-)"
                onChange={handleInput}
                value={formState.password}
                required
              />
            </p>
            <p>
              <label htmlFor="passwordConfirm">Password Confirm:</label>
              <input
                id="passwordConfirm"
                type="password"
                placeholder="Password Confirm"
                minLength="8"
                name="passwordConfirm"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\#\?!\@\$%^&*\-]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter and a special character (#?!@$ %^&*-)"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
            </p>

            <p className="control">
              <button type="submit">Sign Up</button>
            </p>
          </div>
        </form>

        <p>username1</p>
        <p>test1@test.com</p>
        <p>!Password1</p>
      </div>
    </>
  );
};

export default SignUp;
