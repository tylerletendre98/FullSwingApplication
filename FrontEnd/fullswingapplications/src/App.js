import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from './Pages/landingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
