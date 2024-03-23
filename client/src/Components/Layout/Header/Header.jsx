import logo from "../../../assets/Logo.svg";
import "./Header.css";
import Search from "./Search/Search.jsx"
import Profile from "../../Pages/Profile/Profile.jsx";
import Cart from "../../Pages/Cart/Cart.jsx";

function Header() {
    return(
        <header className="header">
            <div className="logo-container">
                <img alt="logo" src={logo} className="logo"></img>
            </div>
            <div className="search-container">
                <Search />
            </div>
            <div className="profile-cart-buttons-container">
                <Profile />
                <Cart />
            </div>
        </header>
    );
}

export default Header;