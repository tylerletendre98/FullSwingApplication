import React from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import "./loginPage.css";

function LoginPage(props) {
  return (
    <div>
      <div className="login-form">
        <LoginForm loginUser={props.loginUser}/>
      </div>
      <div></div>
    </div>
  );
}

export default LoginPage;
