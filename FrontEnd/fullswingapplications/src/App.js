import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingPage";
import ProfilePage from "./Pages/profilePage/ProfilePage";
import LoginPage from "./Pages/loginPage/LoginPage";
import Header from "./components/header/Header";
import { useState } from "react";
import RegistrationPage from "./Pages/registrationPage/RegistrationPage";

function App() {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState();

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
            element={<ProfilePage currentLoggedInUser={currentLoggedInUser} />}
          />
          <Route
            path="/loginPage"
            element={
              <LoginPage setCurrentLoggedInUser={setCurrentLoggedInUser} />
            }
          />
          <Route path="/registrationPage" element={<RegistrationPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
