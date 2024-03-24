import { Route, Routes } from "react-router-dom"
import Header from './Components/Layout/Header/Header.jsx'
import Navbar from './Components/Layout/Navbar/Navbar.jsx'
import Specials from "./Pages/Specials/Specials.jsx"
import DietNutrition from "./Pages/DietNutrition/DietNutrition.jsx"
import GrowItYourself from "./Pages/GrowItYourself/GrowItYourself.jsx"
import About from './Pages/About/About.jsx'
import Login from "./Pages/Login/Login.jsx"
import './App.css'

function App() {
  return (
    <>
      <Header isLoggedIn={false} />
      <Navbar />
      <hr></hr>

      {/* Login page should not show the header, navbar or footer */}


      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/specials" element={<Specials />}/>
        <Route path="/growityourself" element={<GrowItYourself />}/>
        <Route path="/dietnutrition" element={<DietNutrition />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
