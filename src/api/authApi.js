import axios from "axios";
import { toast } from "react-toastify";

export async function signUp(email, password, username) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/register`,
      {
        email,
        password,
        username,
      }
    );
    return response.data;
  } catch (err) {
    toast.error(err.response?.data?.msg || "Registration error ", {
      position: "top-right",
      autoClose: 3000,
    });
  }
}

export async function signIn(email, password) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
      {
        email,
        password,
      }
    );

    if (response.statusText === "OK") {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    }
    return response.data;
  } catch (err) {
    toast.error(err.response?.data?.message || "Login error ", {
      position: "top-right",
      autoClose: 3000,
    });
  }
}

export async function logout() {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken)
    toast.error("In order to make a logout, you must first make a login ;)");
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/logout`,
      {
        refreshToken,
      }
    );

    if (response.statusText === "OK") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }

    return response.data;
  } catch (err) {
    toast.error(err.response?.data?.message || "Logout error ", {
      position: "top-right",
      autoClose: 3000,
    });
  }
}

export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    toast.error("Refresh Token not found");
    return false;
  }

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/refresh`,
      {
        refreshToken,
      }
    );

    if (response.ok) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    }

    return response.data;
  } catch (err) {
    toast.error(err.response?.data?.message || "Something went wrong", {
      position: "top-right",
      autoClose: 3000,
    });
  }
}
