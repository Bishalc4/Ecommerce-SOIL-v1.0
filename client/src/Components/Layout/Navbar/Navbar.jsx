import "./Navbar.css"
import { FiMenu } from "react-icons/fi";

function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <li><a href="#">
                    <FiMenu />
                    <span>Browse</span>
                </a></li>
                <li><a href="#">
                    <span>Specials</span>
                </a></li>
                <li><a href="#">
                    <span>Diet/Nutrition</span>
                </a></li>
                <li><a href="#">
                    <span>Grow It Yourself</span>
                </a></li>
                <li><a href="#">
                    <span>About</span>
                </a></li>
            </ul>
        </nav>
    );
}

export default Navbar;