import "./Navbar.css"
import { FiMenu } from "react-icons/fi";

function Navbar() {
    return(
        <div className="navbar">
            <a href="#">
                <FiMenu />
                Browse
            </a>
            <a href="#">Specials</a>
            <a href="#">Diet/Nutrition</a>
            <a href="#">Grow It Yourself</a>
            <a href="#">About</a>
        </div>
    );
}

export default Navbar;