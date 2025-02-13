import { useState } from "react";

const SignIn = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

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
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleInput}
            value={formState.password}
            required
          />
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
