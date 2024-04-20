import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Navbar.css"; // Import your CSS file for styling

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/register");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/register" className="navbar-brand">
          KILINIK
        </Link>
      </div>
      <div className="navbar-right">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
