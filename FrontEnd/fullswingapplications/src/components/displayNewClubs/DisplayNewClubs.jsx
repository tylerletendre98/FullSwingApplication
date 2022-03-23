import React from 'react'

function DisplayNewClubs(props) {
  return (
    <div>
        {props.newClubs.map((club)=>{
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
  )
}

export default DisplayNewClubs