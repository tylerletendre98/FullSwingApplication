import React from "react";
import { Link } from "react-router-dom";

function DisplayClubs(props) {
  if (props.clubs === undefined) {
    return (
      <div>
        <h2>Loading clubs</h2>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h2>Belongs to these clubs</h2>
        </div>
        <div>
          {props.clubs.map((club) => {
            return (
              <div>
                <div>
                  <h3>{club.name}</h3>
                </div>
                <div>
                  <p>Owner: {club.owner}</p>
                </div>
                <div>
                  <p>Number of members:{club.members.length}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <Link to={"/clubs"}>
            <p>Click here to create a new club or join an existing club</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default DisplayClubs;
