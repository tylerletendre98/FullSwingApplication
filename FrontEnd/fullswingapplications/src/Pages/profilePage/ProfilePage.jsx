import React from "react";
import UserInfo from "../../components/userInfo/UserInfo";
import DisplayGolfBag from "../../components/displayGolfBag/DisplayGolfBag";

function ProfilePage(props) {
  return (
    <div>
      <div>
        <UserInfo currentLoggedInUser={props.currentLoggedInUser} />
      </div>
      <div>
        <DisplayGolfBag currentLoggedInUser={props.currentLoggedInUser} />
      </div>
    </div>
  );
}

export default ProfilePage;
