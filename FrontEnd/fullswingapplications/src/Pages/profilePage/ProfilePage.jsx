import React from "react";
import UserInfo from "../../components/userInfo/UserInfo";

function ProfilePage(props) {
  return <UserInfo currentLoggedInUser={props.currentLoggedInUser} />;
}

export default ProfilePage;
