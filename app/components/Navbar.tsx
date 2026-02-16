import { Link } from "react-router";
import Radio from "./NavMenu";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false); // state for safe rendering

  useEffect(() => {
    // wait until client hydration completes
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <nav className="navbar">
        <Link to="/">
          <p className="text-2xl font-bold text-gradient">Resanalyzer</p>
        </Link>
        Loading...
        <Link to="/upload" className="primary-button w-fit">
          Upload Resume
        </Link>
      </nav>
    );
  }
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">Resanalyzer</p>
      </Link>

      <Radio />
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  );
};
export default Navbar;
