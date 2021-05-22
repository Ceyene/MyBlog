import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <nav className="sticky-nav">
      <Link to="/" className="sticky-nav-button">
        Home
      </Link>
      <Link to="/about" className="sticky-nav-button">
        About
      </Link>
      <Link to="/contact" className="sticky-nav-button">
        Contact
      </Link>
    </nav>
  );
};

export default Header;
