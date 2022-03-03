import React from "react";
import { useState } from "react";
import "./registerForm.css";
import { Link } from "react-router-dom";

function RegisterForm(props) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [fullname, setFullname] = useState();
  const [dexterity, setDexterity] = useState();
  const [password, setPassword] = useState();

  const addUser = () => {
    const newUser = {
      username: username,
      email: email,
      fullname: fullname,
      dexterity: dexterity,
      password: password,
    };
    props.createNewUser(newUser);
  };

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
              <input
                type="text"
                placeholder="JohnSmith123"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="input">
            <div>
              <label htmlFor="">Enter Password:</label>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          <div className="input">
            <div>
              <label htmlFor="">Enter Email:</label>
            </div>
            <div>
              <input
                type="email"
                placeholder="JohnSmith123@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="input">
            <div>
              <label htmlFor="">Enter full name:</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="John Smith"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
          </div>
          <div className="input">
            <div>
              <label htmlFor="">Enter Dexterity:</label>
            </div>
            <div>
              <select
                name=""
                id=""
                value={dexterity}
                onChange={(e) => setDexterity(e.target.value)}
              >
                <option value="Left">Left Handed</option>
                <option value="Right">Right Handed</option>
              </select>
            </div>
          </div>
          <div className="register-button">
            <Link to="/profilePage">
              <button onClick={() => addUser()}>Register Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
