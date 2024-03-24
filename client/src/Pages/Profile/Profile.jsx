import "./Profile.css";
import { IoPersonSharp } from "react-icons/io5";


function Post() {
    return(
        <div className="profile-container">
            <button className="profile-button">
                <IoPersonSharp className="profile-icon"/>
            </button>
            <div className="profile-button-text">
                <p className="profile-text">Log In or Sign Up</p>
                <p className="profile-my-profile"><b>My Profile</b></p>
            </div>
        </div>
    );
}

export default Post;