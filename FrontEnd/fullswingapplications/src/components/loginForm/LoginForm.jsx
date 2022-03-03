import React from "react";
import { Link } from "react-router-dom";
import "./loginForm.css";

function LoginForm() {
  return (
    <div className="form-container">
      <div className="form-inputs">
        <div className="form-label">
          <label htmlFor="">Username:</label>
        </div>
        <div>
          <input type="text" placeholder="Enter username" />
        </div>
        <div className="form-label">
          <label htmlFor="">Password:</label>
        </div>
        <div>
          <input type="password" placeholder="Enter password" />
        </div>
      </div>
      <div className="form-button">
        <Link to="/profilePage">
          <button>Login</button>
        </Link>
      </div>
      <div className="form-registration">
        <Link to="/registrationPage">
          <p>Create an account</p>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
