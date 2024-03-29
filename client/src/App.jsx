import { useLocation } from "react-router-dom"
import Header from './Components/Layout/Header/Header.jsx'
import Navbar from './Components/Layout/Navbar/Navbar.jsx'
import Footer from './Components/Layout/Footer/Footer.jsx'
import AllRoutes from "./Pages/AllRoutes.jsx"

import './App.css'

function App() {
  
  const location = useLocation();
  const isLoginPage = (location.pathname === '/login' || location.pathname === '/signup');

  return (
    <>
      {!isLoginPage && (
        <>
          <Header isLoggedIn={false} />
          <Navbar />
        </>
      )}

      <AllRoutes />

      {!isLoginPage && <Footer />}
    </>
  )
}

export default App
