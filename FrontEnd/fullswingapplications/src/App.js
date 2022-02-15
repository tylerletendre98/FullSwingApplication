import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from './Pages/landingPage/LandingPage';
import ProfilePage from './Pages/profilePage/ProfilePage';
import Header from './components/header/Header'
import {useState} from 'react'

function App() {

  const [currentLoggedInUser, setCurrentLoggedInUser] = useState()

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/profilePage' element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
