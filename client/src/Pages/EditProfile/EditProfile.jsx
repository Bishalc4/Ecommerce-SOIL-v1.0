import { Link } from 'react-router-dom'
import { useState } from "react";
import "./EditProfile.scss"

function EditProfile() {
    const currUser = JSON.parse((localStorage.getItem("user")));
    const users = localStorage.getItem("users");
    var usersArray = JSON.parse(users);
    
    let currUserAccount = null;
    let userAccountIndex = 0;
    for (const user of usersArray) {
        if (user.username === currUser) {
            currUserAccount = user;
            break;
        }
        userAccountIndex++;
    }
    
    const [userDetails, setUserDetails] = useState({username: currUserAccount.username,
                                                    email: currUserAccount.email,
                                                    firstName: currUserAccount.firstName,
                                                    lastName: currUserAccount.lastName
                                                    });
    
    function handleFirstNameChange(e) {
        setUserDetails({...userDetails, firstName: e.target.value.replace(/\s/g, '')});
    }

    function handleLastNameChange(e) {
        setUserDetails({...userDetails, lastName: e.target.value.replace(/\s/g, '')});
    }

    function handleAccountSaveChanges(e) {
        e.preventDefault();
        usersArray[userAccountIndex].email = userDetails.email;
        usersArray[userAccountIndex].firstName = userDetails.firstName;
        usersArray[userAccountIndex].lastName = userDetails.lastName;
        localStorage.setItem("users", JSON.stringify(usersArray));
    }

    return(
        <div className="edit-profile-container">
            <h1>Edit profile</h1>
            <form className="account-details-form" onSubmit={handleAccountSaveChanges}>
                <div className="username-group">
                    <input value={userDetails.username} readOnly></input>
                </div>
                <div className="name-container">
                    <input value={userDetails.firstName} onChange={handleFirstNameChange} required></input>
                    <input value={userDetails.lastName} onChange={handleLastNameChange} required></input>
                </div>
                <div className="email-group">
                    <input type="email" value={userDetails.email} readOnly></input>
                </div>
                <div className='form-buttons-container'>
                    <button type='submit'>Cancel</button>
                    <button type="submit">Save Changes</button>
                </div>
                <div className='password-container'>
                    <Link to="/passwordchange">
                        <button className='password-btn'>Change password</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;