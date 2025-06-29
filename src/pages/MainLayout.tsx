import { Outlet } from "react-router-dom";
import NavBar from "../components/nav";

function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default MainLayout;
