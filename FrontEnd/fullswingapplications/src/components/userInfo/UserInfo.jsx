import React from "react";

function UserInfo(props) {
  return (
    <div>
      <div>
        <h3>{props.currentLoggedInUser.username}</h3>
      </div>
      <div>
        <p>Plays: {props.currentLoggedInUser.dexterity} handed</p>
      </div>
      <div>
        <p>Total rounds played: {props.currentLoggedInUser.rounds.length}</p>
      </div>
    </div>
  );
}

export default UserInfo;
