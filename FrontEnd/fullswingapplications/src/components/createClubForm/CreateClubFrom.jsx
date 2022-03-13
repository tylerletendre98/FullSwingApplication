import React from "react";

function CreateClubForm() {
  return (
    <div>
      <div>
        <h2>Enter your new Club info</h2>
      </div>
      <div>
        <div>
          <label htmlFor="">Club Name:</label>
        </div>
        <div>
          <input type="text" placeholder="Enter club name" />
        </div>
        <div>
          <label htmlFor="">Club Password:</label>
        </div>
        <div>
          <input type="password" placeholder="Create a club password" />
        </div>
      </div>
    </div>
  );
}

export default CreateClubForm;
