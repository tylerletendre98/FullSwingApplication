import React, { useEffect } from "react";
import CreateClubForm from "../../components/createClubForm/CreateClubFrom";
import DisplayNewClubs from "../../components/displayNewClubs/DisplayNewClubs";

function Clubs(props) {

  useEffect(()=>{
    props.getOtherClubs()
  })

  return (
    <div>
      <div>
        <CreateClubForm />
      </div>
      <div>
        <DisplayNewClubs newClubs={props.newClubs}/>
      </div>
    </div>
  );
}

export default Clubs;
