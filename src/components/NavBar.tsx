import { Link } from "react-router-dom";
import { Heading } from "./ui/typography";

export default function Nav() {
  return (
    <div className="flex items-center justify-between px-38 py-3.5">
      <Link to="/">
        <Heading>Quote Calculator</Heading>
      </Link>
      <Link to="about" className="text-lg">
        About
      </Link>
    </div>
  );
}
