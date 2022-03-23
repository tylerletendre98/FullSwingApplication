import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingPage";
import ProfilePage from "./Pages/profilePage/ProfilePage";
import Header from "./components/header/Header";
import { useState } from "react";
import axios from "axios";
import Clubs from "./Pages/clubs/Clubs";

function App() {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState();
  const [clubs, setClubs] = useState()
  const [creatingAccount,setCreatingAccount] = useState(false)

  const createNewUser = (newUser)=>{
    axios.post('http://localhost:5000/api/users/', newUser)
    .then((res)=>{
      setCurrentLoggedInUser(res.data)
      console.log(currentLoggedInUser)
    })
  }

  const createGolfClub = (golfClub)=>{
    axios.post(`http://localhost:5000/api/users/addGolfClub/${currentLoggedInUser._id}`, golfClub )
    .then((res)=>{
      setCurrentLoggedInUser(res.data)
    })
}
  const loginUser =(userInfo)=>{
    axios.post('http://localhost:5000/api/users/loginUser', userInfo)
    .then((res)=>{
      setCurrentLoggedInUser(res.data)
    })
    console.log(currentLoggedInUser)
  }

  const logOutUser = ()=>{
    setCurrentLoggedInUser(undefined)
  }

  const createClub = (clubInfo)=>{
    axios.post(`http://localhost:5000/api/clubs/newClub/${currentLoggedInUser._id}`, clubInfo)
    .then((res)=>{
      clubs.push(res.data)
    })
  }

  return (
    <div className="App">
      <div>
        <Header currentLoggedInUser={currentLoggedInUser} logOutUser={logOutUser}/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage 
          setCreatingAccount={setCreatingAccount}
          loginUser={loginUser}
          createNewUser={createNewUser}
          creatingAccount={creatingAccount}/>}
            />
          <Route  
            path="/profilePage"
            element={<ProfilePage 
              currentLoggedInUser={currentLoggedInUser} 
              createGolfClub={createGolfClub}
              />}
          />
          <Route path="/clubs" element={<Clubs createClub={createClub}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
