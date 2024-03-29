import { Link } from "react-router-dom"
import AuthHeader from "../../Components/Layout/Auth-Header/AuthHeader"
import "./Login.scss"

//Users will use this page to login
function Login() {
    return(
        <div className="login-container">
            <AuthHeader />
            <hr></hr>
            <form className="form-container">
                <div className="form-group">
                    <label className="label-control">Username</label>
                    <input className="input-control" />
                </div>

                <div className="form-group">
                    <label className="label-control">Password</label>
                    <input type="password" className="input-control" />
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </form>
            <div className="sign-up-link-container">
                <p>Dont have an account?</p>
                <Link to="/signup">
                    <p>Sign Up</p>
                </Link>
            </div>
        </div>
    );
}

export default Login;