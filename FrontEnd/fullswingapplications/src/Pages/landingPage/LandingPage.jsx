import React from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import RegisterForm from "../../components/registerForm/RegisterForm";
import "./landingPage.css";

function LandingPage(props) {
  if (props.creatingAccount === false) {
    return (
      <div className="landing-page-container">
        <div className="landing-page-login">
          <LoginForm
            setCreatingAccount={props.setCreatingAccount}
            loginUser={props.loginUser}
          />
        </div>
        <div className="landing-page-about">
          <h2>About me stuff</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="landing-page-container">
        <div className="landing-page-registration">
          <RegisterForm createUser={props.createUser} />
        </div>
        <div className="landing-page-about">
          <h2>About me stuff</h2>
        </div>
      </div>
    );
  }
}

export default LandingPage;
