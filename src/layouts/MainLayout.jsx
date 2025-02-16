import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export const MainLayout = () => {
  return (
    <>
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

export default MainLayout;
