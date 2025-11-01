import { Link } from "react-router";
import Radio from "./NavMenu";
const Navbar = () => {
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
