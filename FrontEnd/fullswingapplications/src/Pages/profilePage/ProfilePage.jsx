import React, { useEffect, useState } from "react";
import UserInfo from "../../components/userInfo/UserInfo";
import DisplayGolfBag from "../../components/displayGolfBag/DisplayGolfBag";
import DisplayClubs from "../../components/displayClubs/DisplayClubs";
import axios from "axios";
import './profilePage.css'

function ProfilePage(props) {

  const [clubs, setClubs] = useState()

  useEffect(()=>{
    axios.get('http://localhost:5000/api/clubs/getClubs')
      .then((res)=>{
        setClubs(res.data)
      })
      console.log(clubs)
  },[])

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
            <DisplayClubs clubs={clubs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
