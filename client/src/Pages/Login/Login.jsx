import AuthHeader from "../../Components/Layout/Auth-Header/AuthHeader";
import "./Login.css"

//Users will use this page to login
function Login() {
    return(
        <div className="login-container">
            <AuthHeader />
            <hr></hr>
        </div>
    );
}

export default Login;