import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      className="flex items-center justify-between w-full p-5 fixed bg-white
     font-medium drop-shadow-2xl drop-shadow-black/2"
    >
      <span>ByHoneyLee</span>
      <div className="flex items-center justify-between min-w-35 ">
        <Link to="/">Calculator</Link>
        <Link to="About">About</Link>
      </div>
    </div>
  );
}

export default NavBar;
