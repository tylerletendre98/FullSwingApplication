import React from "react";

function UserInfo(props) {
  return (
    <div>
      <div>
        <h3>{props.currentLoggedInUser.username}</h3>
      </div>
      <div>
        <p>{props.currentLoggedInUser.dexterity}</p>
      </div>
      <div>
        <p>total rounds played: {props.currentLoggedInUser.rounds.length}</p>
      </div>
    </div>
  );
}

export default UserInfo;
