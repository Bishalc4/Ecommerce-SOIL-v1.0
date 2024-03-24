import "./Profile.css";
import PropTypes from 'prop-types'
import { IoPersonSharp } from "react-icons/io5";


function Profile(props) {
    const loggedIn = props.loggedIn; 

    return(
        <div className="profile-container">
            <button className="profile-button">
                <IoPersonSharp className="profile-icon"/>
            </button>
            <div className="profile-button-text">
                {loggedIn ? (
                    <p className="profile-text">Welcome</p>
                ): (
                    <p className="profile-text">Log In or Sign Up</p>
                )}
                <p className="profile-my-profile"><b>My Profile</b></p>
            </div>
        </div>
    );
}
Profile.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Profile;