import AuthHeader from "../../Components/Layout/Auth-Header/AuthHeader";
import "./Login.css"

//Users will use this page to login
function Login() {
    return(
        <div className="login-container">
            <AuthHeader />
            <hr></hr>
            <form>
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
        </div>
    );
}

export default Login;