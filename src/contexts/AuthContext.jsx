import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const url = import.meta.env.VITE_DEV_SERVER;

  const signup = async (formState) => {
    try {
      const res = await axios.post(`${url}/users/signup`, formState, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (!res.data) throw new Error("Error: No response data from server");

      setUser(res.data.user);

      setIsAuthenticated(true);

      localStorage.setItem("token", res.data.token);

      console.log(`Welcome on Board, ${formState.userName}!`);

      navigate("/login");
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  };

  const login = async (formState) => {
    let success = false;
    try {
      const res = await axios.post(`${url}/users/login`, formState, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (!res.data) throw new Error("Error: No response data from server");

      setUser(res.data.user);

      setIsAuthenticated(true);

      localStorage.setItem("token", res.data.token);
      console.log(`Welcome back, ${res.data.user.userName}!`);

      navigate("/userpage");
      success = true;
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
    return success;
  };

  const logout = async () => {
    try {
      const res = await axios.post(`${url}/users/logout`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (!res.ok) throw new Error("Logout failed");

      localStorage.removeItem("token");

      setUser(null);

      setIsAuthenticated(false);

      console.log(`Logged out`);

      navigate("/");
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signup, user, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
