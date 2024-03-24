import PropTypes from 'prop-types'
import "./Header.css"
import logo from "../../../assets/SOIL-logo.svg"
import Profile from "../../../Pages/Profile/Profile.jsx"
import Cart from "../../../Pages/Cart/Cart.jsx"
import Search from "../../../Pages/Search/Search.jsx"

function Header(props) {
    const isLoggedIn = props.isLoggedIn;

    return(
        <>
            <header className="header">
                <img src={logo} alt="SOIL_Logo" className="logo"/>

                <Search />

                <div className="site-buttons">
                    <Profile loggedIn={isLoggedIn}/>
                    <Cart className="cart-button"/>
                </div>
            </header>
        </>
    );
}
Header.propTypes = {
    isLoggedIn: PropTypes.bool,
}

export default Header;