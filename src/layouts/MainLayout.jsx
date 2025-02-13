import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  console.log("TEST");
  return (
    <div className="">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
