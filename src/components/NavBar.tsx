import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex items-center justify-between px-38 py-3.5">
      <Link to="/" className="text-xl font-medium">
        Quote Calculator
      </Link>
      <Link to="about" className="text-lg">
        About
      </Link>
    </div>
  );
}
