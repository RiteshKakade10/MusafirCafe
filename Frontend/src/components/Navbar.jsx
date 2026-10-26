import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/cafeLogoPng.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      {/* Logo */}
      <Link
        to="/"
        className="brand"
        aria-label="Musafir Cafe home"
      >
        MUSAFIR CAFE
      </Link>

      {/* Location */}
      <div className="location">
        {/* <span className="location-dot" aria-hidden="true" />
        <span>Shrigonda</span> */}
      </div>

      {/* Menu Button */}
      <button
        type="button"
        className={`menu-button ${menuOpen ? "active" : ""}`}
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="nav-dropdown">

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
            <span>↗</span>
          </Link>


          <Link
            to="/ourstory"
            onClick={() => setMenuOpen(false)}
          >
            Our Story
            <span>↗</span>
          </Link>

        </div>
      )}

    </header>
  );
}

export default Navbar;