import { Link } from "react-router-dom";
import { Heading } from "./ui/typography";

export default function Nav() {
  return (
    <nav className="flex items-center justify-center px-4 sm:px-8 md:px-38 py-3 top-0">
      {/* Logo / Heading */}
      <Link to="/">
        <Heading className="text-lg sm:text-xl md:text-lg">Quote Calculator</Heading>
      </Link>
    </nav>
  );
}
