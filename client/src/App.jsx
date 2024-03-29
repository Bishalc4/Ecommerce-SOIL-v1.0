import { useLocation } from "react-router-dom"
import Header from './Components/Layout/Header/Header.jsx'
import Navbar from './Components/Layout/Navbar/Navbar.jsx'
import Footer from './Components/Layout/Footer/Footer.jsx'
import AllRoutes from "./Pages/AllRoutes.jsx"

import './App.css'

function App() {

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && (
        <>
          <Header isLoggedIn={true} />
          <Navbar />
          <AllRoutes className="all-routes" />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
