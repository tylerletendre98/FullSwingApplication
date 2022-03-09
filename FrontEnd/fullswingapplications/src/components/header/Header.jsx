import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header(props) {
  if(props.currentLoggedInUser === undefined){
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
  }else{
    return(
      <div className="header-container">
        <div className="header-name">
          <h1>Full Swing Applications</h1>
        </div>
        <div className="header-buttons">
          <Link to="/loginPage">
            <button onClick={()=>props.logOutUser()}>Logout</button>
          </Link>
        </div>
      </div>

    )
  }
  }

export default Header;
