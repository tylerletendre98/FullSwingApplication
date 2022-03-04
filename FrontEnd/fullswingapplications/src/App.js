import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingPage";
import ProfilePage from "./Pages/profilePage/ProfilePage";
import LoginPage from "./Pages/loginPage/LoginPage";
import Header from "./components/header/Header";
import { useState } from "react";
import RegistrationPage from "./Pages/registrationPage/RegistrationPage";
import data from "./data";
import axios from "axios";

function App() {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(data);

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
  return (
    <div className="App">
      <div>
        <Header />
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
              <LoginPage setCurrentLoggedInUser={setCurrentLoggedInUser} />
            }
          />
          <Route path="/registrationPage" element={<RegistrationPage createNewUser={createNewUser}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
