import { Link } from "react-router-dom";
import { Heading } from "./ui/typography";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 md:px-38 py-3 top-0 z-50">
      {/* Logo / Heading */}
      <Link to="/">
        <Heading className="text-lg sm:text-xl md:text-2xl">Quote Calculator</Heading>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        <Link 
          to="about" 
          className="text-sm sm:text-base md:text-lg hover:text-gray-700 transition-colors"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
