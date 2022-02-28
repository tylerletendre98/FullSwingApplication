import React from "react";
import { Link } from "react-router-dom";
import "./loginForm.css";

function LoginForm() {
  return (
    <div className="form-container">
      <div className="form-inputs">
        <div>
          <label htmlFor="">Username:</label>
        </div>
        <div>
          <input type="text" placeholder="enter username" />
        </div>
        <div>
          <label htmlFor="">Password:</label>
        </div>
        <div>
          <input type="password" placeholder="enter password" />
        </div>
      </div>
      <div className="form-button">
        <Link to="/profilePage">
          <button>Login</button>
        </Link>
      </div>
      <div>
        <Link to="/registrationPage">
          <p>Create an account</p>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
