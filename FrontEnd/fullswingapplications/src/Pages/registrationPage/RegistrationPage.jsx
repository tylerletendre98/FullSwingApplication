import React from "react";
import RegisterForm from "../../components/registerForm/RegisterForm";

function RegistrationPage(props) {
  return (
    <div>
      <RegisterForm createNewUser={props.createNewUser} />
    </div>
  );
}

export default RegistrationPage;
