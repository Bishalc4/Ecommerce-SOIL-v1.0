import { Link } from 'react-router-dom'
import logo from "../../../assets/SOIL-logo.svg"
import "./AuthHeader.css"

function AuthHeader() {
    return(
        <header className="authentication-header">
            <Link to="/">
                    <img src={logo} alt="SOIL_Logo" className="logo"/>
            </Link>
        </header>
    );
}

export default AuthHeader