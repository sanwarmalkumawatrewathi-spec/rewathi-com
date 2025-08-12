import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "10px", background: "#222", color: "white" }}>
      <nav>
        <Link to="/" style={{ margin: "0 10px", color: "white" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 10px", color: "white" }}>About</Link>
      </nav>
    </header>
  );
}
