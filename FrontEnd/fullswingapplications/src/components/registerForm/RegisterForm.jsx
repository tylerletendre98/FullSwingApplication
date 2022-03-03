import React from "react";
import "./registerForm.css";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="register-form-container">
      <div className="form-header">
        <h2>Please fill the form below</h2>
      </div>
      <div className="form-body">
        <div className="inputs-container">
          <div className="input">
            <div>
              <label htmlFor="">Enter Username:</label>
            </div>
            <div>
              <input type="text" placeholder="JohnSmith123" />
            </div>
          </div>
          <div className="input">
            <div>
              <label htmlFor="">Enter Password:</label>
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="input">
            <div>
              <label htmlFor="">Enter Username:</label>
            </div>
            <div>
              <input type="email" placeholder="JohnSmith123@mail.com" />
            </div>
          </div>
          <div className="input">
            <div>
              <label htmlFor="">Enter full name:</label>
            </div>
            <div>
              <input type="text" placeholder="John Smith" />
            </div>
          </div>
          <div className="input">
            <div>
              <label htmlFor="">Enter Dexterity:</label>
            </div>
            <div>
              <select name="" id="">
                <option value="Left">Left Handed</option>
                <option value="Right">Right Handed</option>
              </select>
            </div>
          </div>
          <div className="register-button">
            <Link to="/profilePage">
              <button>Register Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
