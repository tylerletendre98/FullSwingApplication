import React from "react";
import { useState } from "react";
import "./golfClubForm.css";

function GolfClubForm(props) {

    const [clubType, setClubType] = useState()
    const [clubBrand, setClubBrand] = useState()
    const [clubModel, setClubModel] = useState()
    
    const addNewClub = ()=>{
        const newClub = {
            type:clubType,
            brand:clubBrand,
            model:clubModel
        }
        props.createGolfClub(newClub)
    }

  return (
    <div>
      <div>
        <div>
          <label htmlFor="">Select a club:</label>
          <select name="" id="" value={clubType} onChange={(e)=> setClubType(e.target.value)}>
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
          <input type="text" name="" id="" value={clubBrand} onChange={(e)=> setClubBrand(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Enter Club model</label>
          <input type="text" name="" id="" value={clubModel} onChange={(e)=> setClubModel(e.target.value)}/>
        </div>
        <div>
            <button onClick={()=> addNewClub()}>Add New Club</button>
        </div>
      </div>
    </div>
  );
}

export default GolfClubForm;
