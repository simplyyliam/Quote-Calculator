import { Outlet } from "react-router-dom";
import { Nav } from "./components";

export default function Layout() {
  return (
    <div className="flex flex-col w-screen h-screen bg-[#f2f2f2] gap-2.5">
      <Nav />
      <Outlet />
    </div>
  );
}
