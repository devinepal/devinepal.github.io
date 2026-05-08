import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}