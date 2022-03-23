import React from "react";
import UserInfo from "../../components/userInfo/UserInfo";
import DisplayGolfBag from "../../components/displayGolfBag/DisplayGolfBag";
import DisplayClubsBelongedTo from "../../components/displayClubsBelongedTo/DisplayClubsBelongedTo";
import './profilePage.css'

function ProfilePage(props) {

  if(props.currentLoggedInUser=== undefined){
    return(
      <div>
        <h1>Loading</h1>
      </div>
    )
  }else{
    return (
      <div>
        <div>
          <UserInfo currentLoggedInUser={props.currentLoggedInUser} />
        </div>
        <div className="profile-page-body">
          <div>
            <DisplayGolfBag currentLoggedInUser={props.currentLoggedInUser} createGolfClub={props.createGolfClub} />
          </div>
          <div>
            <DisplayClubsBelongedTo currentLoggedInUser={props.currentLoggedInUser}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
