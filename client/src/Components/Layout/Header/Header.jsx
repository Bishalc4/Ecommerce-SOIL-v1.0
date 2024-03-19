import logo from "../../../assets/Logo.svg";
import "./Header.css";
import Search from "./Search/Search.jsx"
import Profile from "../../Pages/Profile/Profile.jsx";
import Cart from "../../Pages/Cart/Cart.jsx";

function Header() {
    return(
        <div className="header">
            <div className="logo-container">
                <img alt="logo" src={logo} className="logo"></img>
                <h1>SOIL</h1>
            </div>
            <Search />
            <Profile />
            <Cart />
        </div>
    );
}

export default Header;