import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-name">
        <h1>Full Swing Applications</h1>
      </div>
      <div className="header-buttons">
        <Link to="/loginPage">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
