import "./Profile.css";
import { IoPersonSharp } from "react-icons/io5";


function Post() {
    return(
        <div className="profile-container">
            <button className="profile-button">
                <IoPersonSharp className="profile-icon"/>
            </button>
            <p className="profile-text">Sign Up/Log In</p>
        </div>
    );
}

export default Post;