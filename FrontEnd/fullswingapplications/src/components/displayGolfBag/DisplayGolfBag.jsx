import React from "react";
import GolfClubForm from "../golfCLubForm/GolfClubForm";
import './displayGolfBag.css'

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
      <div className="display-golfbag-container">
        <div className="golfbag-component">
          <div className="golfbag-title">
            <h3>Golfbag</h3>
          </div>
          <div>
            {props.currentLoggedInUser.golfBag.map((club) => {
              return (
                <div className="golfClub-container">
                  <div className="golfClub-description">
                    <p>Type: {club.type}</p>
                  </div>
                  <div className="golfClub-description">
                    <p>Brand: {club.brand}</p>
                  </div>
                  <div className="golfClub-description">
                    <p>Model: {club.model}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="golfbag-component">
          <div>
            <h4>Add another club:</h4>
          </div>
          <div>
            <GolfClubForm createGolfClub={props.createGolfClub} />
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayGolfBag;
