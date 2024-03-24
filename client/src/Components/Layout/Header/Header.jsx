import { Link } from 'react-router-dom';
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
                <Link to="/">
                    <img src={logo} alt="SOIL_Logo" className="logo"/>
                </Link>

                <Search />

                <div className="site-buttons">
                    {isLoggedIn ? (
                        <Link to="/profile">
                            
                        </Link>
                    ): (
                        <Link to="/login">
                            <Profile loggedIn={isLoggedIn}/>
                        </Link>
                    )}
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