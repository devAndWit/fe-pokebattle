import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";

export const BlankoPage = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/signin");
  }, [isAuthenticated, navigate]);

  return (
    <>
      <i className="">BlankoPage</i>
      <hr />
      <div>
        <main className="">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default BlankoPage;
