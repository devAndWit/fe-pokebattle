import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const ProtectedLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  const excludeLayoutOn = ["/arena"];

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/signin");
  }, [isAuthenticated, navigate]);

  if (excludeLayoutOn.includes(location.pathname)) {
    return (
      <>
        <div>
          <main className="">
            <Outlet />
          </main>
        </div>
      </>
    );
  }

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
