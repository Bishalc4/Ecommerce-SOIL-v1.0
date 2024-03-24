import './App.css'
import Header from './Components/Layout/Header/Header.jsx'
import Navbar from './Components/Layout/Navbar/Navbar.jsx'

function App() {
  return (
    <>
      <Header isLoggedIn={true} />
      <Navbar />
      <hr></hr>
    </>
  )
}

export default App
