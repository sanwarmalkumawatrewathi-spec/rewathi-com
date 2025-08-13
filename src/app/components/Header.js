import { Link } from "react-router-dom";
import "../assets/css/Header.css"; // import CSS

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
<img src="/assets/images/logo.webp" alt="Rewathi Innovations" />
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
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
        </nav>

        {/* Contact Button */}
        <div className="contact-btn">
          <Link to="/contact">Contact Us →</Link>
        </div>
      </div>
    </header>
  );
}
