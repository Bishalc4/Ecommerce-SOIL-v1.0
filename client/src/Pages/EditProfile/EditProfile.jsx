import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./EditProfile.scss"

function EditProfile() {
    const navigate = useNavigate();
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

    const resetChanges = () => {
        setUserDetails({
            username: currUserAccount.username,
            email: currUserAccount.email,
            firstName: currUserAccount.firstName,
            lastName: currUserAccount.lastName
        });
    };

    const profileChange = () => toast("Profile details changed!");
    const usernameChange = () => toast("Cannot change username");
    const emailChange = () => toast("Cannot change email");
    const cancelChanges = (e) => {
                                    e.preventDefault();
                                    resetChanges();
                                    toast("Profile changes canceled!");
    };

    const passwordNavigation = () => navigate("/passwordchange");
    
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
        profileChange();
    }

    return(
        <div className="edit-profile-container">
            <h1>Edit profile</h1>
            <form className="account-details-form" onSubmit={handleAccountSaveChanges}>
                <div className="username-group">
                    <input value={userDetails.username} onClick={usernameChange} readOnly></input>
                </div>
                <div className="name-container">
                    <input value={userDetails.firstName} onChange={handleFirstNameChange} required></input>
                    <input value={userDetails.lastName} onChange={handleLastNameChange} required></input>
                </div>
                <div className="email-group">
                    <input type="email" value={userDetails.email} onClick={emailChange} readOnly></input>
                </div>
                <div className='form-buttons-container'>
                    <button className='cancelBtn' onClick={cancelChanges}>Cancel</button>
                    <button type="submit">Save Changes</button>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={true}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </div>
                <div className='password-container'>
                    <button className='password-btn' onClick={passwordNavigation}>Change password</button>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;