import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import "./Navbar.css"

function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">
                        <FiMenu />
                        <span>Browse</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <span>Specials</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <span>Diet/Nutrition</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <span>Grow It Yourself</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <span>About</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;