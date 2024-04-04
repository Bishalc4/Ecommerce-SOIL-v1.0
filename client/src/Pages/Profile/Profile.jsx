import { Link } from 'react-router-dom'
import ProfileAvatar from "../../assets/ProfileAvatar.png"
import "./Profile.scss"

function Profile() {
    const currUser = JSON.parse((localStorage.getItem("user")));
    const users = localStorage.getItem("users");
    const usersArray = JSON.parse(users);
    let foundUser = null;
    for (const user of usersArray) {
        if (user.name === currUser) {
            foundUser = user;
            break;
        }
    }

    const dateJoined = new Date(foundUser.dateJoined);
    const joinDate = dateJoined.toISOString().split('T')[0];
    
    //signs user out by removing the user key
    const handleSignOut = () => {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");
            console.log("user key has been removed - sign out successful")
        } else {
            console.log("user key does not exist - sign out unsuccessful")
        }
    }

    return(
        <div className="profile-page-container">
            <h1 className="profile-user">{foundUser.name}&apos;s profile</h1>
            <div className="profile-information-container">
                <img src={ProfileAvatar} alt="Profile Avatar" className="profile-avatar"></img>
                <div className="profile-details-container">
                    <p className="profile-username"><b>{foundUser.name}</b></p>
                    <p className="username-join-date">Member since {joinDate}</p>
                    <div className="profile-page-btns">
                        <Link to="/">
                            <button className="edit-profile-btn">Edit Profile</button>
                        </Link>
                        <Link to="/">
                            <button className="edit-profile-btn" onClick={handleSignOut}>Sign Out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile