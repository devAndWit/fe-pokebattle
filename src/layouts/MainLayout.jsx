import { Outlet } from "react-router-dom";

import Navbar from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import "../components/Layout/layout.css";

export const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
