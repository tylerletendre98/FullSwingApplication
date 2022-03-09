import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./loginForm.css";

function LoginForm(props) {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()


  const handleSubmit = ()=>{
    const requestingUser = {
      username:username,
      password:password
    }
    props.loginUser(requestingUser)
  }

  return (
    <div className="form-container">
      <div className="form-inputs">
        <div className="form-label">
          <label htmlFor="">Username:</label>
        </div>
        <div>
          <input type="text" 
          placeholder="Enter username" 
          value={username}
          onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div className="form-label">
          <label htmlFor="">Password:</label>
        </div>
        <div>
          <input type="password" 
            placeholder="Enter password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
        </div>
      </div>
      <div className="form-button">
        <Link to="/profilePage">
          <button onClick={()=>handleSubmit()}>Login</button>
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
