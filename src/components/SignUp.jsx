import { useState } from "react";

const SignUp = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInput = (e) => {
    console.log(formState);
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    console.log(formState);
    e.preventDefault();
    console.log("handleSubmit / function is not implemented");
  };

  return (
    <div>
      <h2>Login</h2>
      <form action="" onSubmit={handleSubmit}>
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
        <p>
          <button type="submit">Sign Up</button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
