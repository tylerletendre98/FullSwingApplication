import React from "react";
import { useState } from "react";
import "./golfClubForm.css";

function GolfClubForm(props) {

    const [clubType, setClubType] = useState()
    const [clubBrand, setClubBrand] = useState()
    const [clubModel, setClubModel] = useState()
    
    const addNewClub = (e)=>{
        const newClub = {
            type:clubType,
            brand:clubBrand,
            model:clubModel
        }
        props.createGolfClub(newClub)
        setClubBrand('')
        setClubModel('')
        setClubType('')
    }

  return (
    <div>
      <div className="golfForm-container">
        <div className="golfForm-input">
          <label htmlFor="">Select a club:</label>
          <select name="" id="" value={clubType} onChange={(e)=> setClubType(e.target.value)}>
            <option value="">Select a club</option>
            <option value="Driver">Driver</option>
            <option value="3 Wood">3 Wood</option>
            <option value="5 Wood">5 Wood</option>
            <option value="2 Hybrid">2 Hybrid</option>
            <option value="3 Hybrid">3 Hybrid</option>
            <option value="4 hybrid">4 Hybrid</option>
            <option value="5 hybrid">5 Hybrid</option>
            <option value="Iron set">Iron set</option>
            <option value="Approach Wedge">Approach Wedge</option>
            <option value="Gap Wedge">Gap Wedge</option>
            <option value="Pitching Wedge">Pitching Wedge</option>
            <option value="Sand Wedge">Sand Wedge</option>
            <option value="48 Degree">48 Degree</option>
            <option value="52 Degree">52 Degree</option>
            <option value="56 Degree">56 Degree</option>
            <option value="58 Degree">58 Degree</option>
            <option value="60 Degree">60 Degree</option>
            <option value="Putter">Putter</option>
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
