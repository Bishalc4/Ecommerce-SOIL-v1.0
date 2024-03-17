import logo from "../../../assets/Logo.svg";
import "./Header.css";

function Header() {
    return(
        <>
            <img alt="logo" src={logo} className="logo"></img>
        </>
    );
}

export default Header;