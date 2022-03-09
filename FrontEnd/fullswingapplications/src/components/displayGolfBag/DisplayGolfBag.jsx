import React from "react";
import GolfClubForm from "../golfCLubForm/GolfClubForm";

function DisplayGolfBag(props) {
  if (props.currentLoggedInUser.golfBag.length === 0) {
    return (
      <div>
        <div>
          <h2>You have not set up a golf bag! add clubs below</h2>
        </div>
        <div>
          <GolfClubForm createGolfClub={props.createGolfClub}/>
        </div>
      </div>
    );
  } else {
    return (
      <div>
          <h3>Golfbag</h3>
        <div>
          {props.currentLoggedInUser.golfBag.map((club) => {
            return (
              <div>
                <div>
                  <p>Type: {club.type}</p>
                </div>
                <div>
                  <p>Brand: {club.brand}</p>
                </div>
                <div>
                  <p>Model: {club.model}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h4>Add another club:</h4>
        </div>
        <div>
          <GolfClubForm createGolfClub={props.createGolfClub} />
        </div>
      </div>
    );
  }
}

export default DisplayGolfBag;
