import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import "../components/Layout/layout.css";

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
        <main className="">
          <Outlet />
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default ProtectedLayout;
