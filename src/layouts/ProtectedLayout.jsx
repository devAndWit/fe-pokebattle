import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const ProtectedLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/signin");
  }, [isAuthenticated, navigate]);

  return (
    <>
      <i className="">ProtectedLayout</i>
      <hr />
      <Navbar />
      <div>
        <main className="">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProtectedLayout;
