import { Link } from 'react-router-dom'
import ProfileAvatar from "../../assets/ProfileAvatar.png"
import "./Profile.scss"

function Profile() {
    return(
        <div className="profile-page-container">
            <h1 className="profile-user">trehanpannya70&apos;s profile</h1>
            <div className="profile-information-container">
                <img src={ProfileAvatar} alt="Profile Avatar" className="profile-avatar"></img>
                <div className="profile-details-container">
                    <p className="profile-username"><b>trehanpannya70</b></p>
                    <p className="username-age">22 years old</p>
                    <p className="username-join-date">Member since December 29, 2018</p>
                    <div className="profile-page-btns">
                        <Link to="/">
                            <button className="edit-profile-btn">Edit Profile</button>
                        </Link>
                        <button className="edit-profile-btn">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile