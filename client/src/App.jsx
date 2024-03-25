import { Route, Routes, useLocation } from "react-router-dom"
import Header from './Components/Layout/Header/Header.jsx'
import Navbar from './Components/Layout/Navbar/Navbar.jsx'
import { Specials, DietNutrition, GrowItYourself, About, Login} from "./Pages"
import './App.css'

function App() {

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header isLoggedIn={true} />}
      {!isLoginPage && <Navbar />}
      <hr></hr>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/growityourself" element={<GrowItYourself />} />
        <Route path="/dietnutrition" element={<DietNutrition />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
