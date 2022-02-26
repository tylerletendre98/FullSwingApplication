import React from "react";
import "./golfClubForm.css";

function GolfClubForm() {
  return (
    <div>
      <div>
        <div>
          <label htmlFor="">Select a club:</label>
          <select name="" id="">
            <option value="">Driver</option>
            <option value="">3 Wood</option>
            <option value="">5 Wood</option>
            <option value="">2 Hybrid</option>
            <option value="">3 Hybrid</option>
            <option value="">4 Hybrid</option>
            <option value="">5 Hybrid</option>
            <option value="">Iron set</option>
            <option value="">Approach Wedge</option>
            <option value="">Gap Wedge</option>
            <option value="">Pitching Wedge</option>
            <option value="">Sand Wedge</option>
            <option value="">48 Degre</option>
            <option value="">4 Hybrid</option>
            <option value="">4 Hybrid</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Enter Club brand</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Enter Club model</label>
          <input type="text" name="" id="" />
        </div>
      </div>
    </div>
  );
}

export default GolfClubForm;
