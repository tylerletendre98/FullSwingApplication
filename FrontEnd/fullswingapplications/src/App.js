import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingPage";
import ProfilePage from "./Pages/profilePage/ProfilePage";
import LoginPage from "./Pages/loginPage/LoginPage";
import Header from "./components/header/Header";
import { useState } from "react";
import RegistrationPage from "./Pages/registrationPage/RegistrationPage";
import axios from "axios";
import Clubs from "./Pages/clubs/Clubs";

function App() {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState();

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
  }

  const logOutUser = ()=>{
    setCurrentLoggedInUser(undefined)
  }

  return (
    <div className="App">
      <div>
        <Header currentLoggedInUser={currentLoggedInUser} logOutUser={logOutUser}/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route  
            path="/profilePage"
            element={<ProfilePage currentLoggedInUser={currentLoggedInUser} createGolfClub={createGolfClub} />}
          />
          <Route
            path="/loginPage"
            element={
              <LoginPage loginUser={loginUser} />
            }
          />
          <Route path="/registrationPage" element={<RegistrationPage createNewUser={createNewUser}/>} />
          <Route path="/clubs" element={<Clubs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
