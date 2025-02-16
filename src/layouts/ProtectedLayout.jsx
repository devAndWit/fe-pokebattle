import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth();
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
      <Header />
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
