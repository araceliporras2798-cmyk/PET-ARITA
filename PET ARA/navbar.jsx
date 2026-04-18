import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/home">🏠</Link>
      <Link to="/history">📋</Link>
      <Link to="/profile">👤</Link>
    </div>
  );
}
