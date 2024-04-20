import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import "./Navbar.scss"

function Navbar() {
    return(
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/browse">
                            <FiMenu />
                            <span>Browse</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/specials">
                            <span>Specials</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dietnutrition">
                            <span>Diet/Nutrition</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/growityourself">
                            <span>Grow It Yourself</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span>About</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </>

    );
}

export default Navbar;