import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container d-flex align-items-center justify-content-between px-2">
        {/* Logo */}
        <div className="logo">
          <img src="/assets/images/logo.png" alt="Rewathi Innovations" />
        </div>

        {/* Hamburger for mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/platforms" className="nav-link">Platforms</Link>
          <Link to="/solutions" className="nav-link">Solutions</Link>
          <Link to="/industries" className="nav-link">Industries</Link>
          <Link to="/success-stories" className="nav-link">Success Stories</Link>
          <div className="dropdown">
            <Link to="/about" className="nav-link">About Us ▾</Link>
            <div className="dropdown-content">
              <Link to="/about/company">Company</Link>
              <Link to="/about/team">Team</Link>
              <Link to="/about/careers">Careers</Link>
            </div>
          </div>
          <div className="contact-btn">
            <Link to="/contact">Contact Us →</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
