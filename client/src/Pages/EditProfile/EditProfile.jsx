import { Link } from 'react-router-dom'
import { useState } from "react";
import "./EditProfile.scss"

function EditProfile() {
    const currUser = JSON.parse((localStorage.getItem("user")));

    const users = localStorage.getItem("users");
    var usersArray = JSON.parse(users);

    const profiles = localStorage.getItem("profiles");
    var profilesArray = JSON.parse(profiles);
    
    let currUserAccount = null; //found user is the array containing all user information
    let userAccountIndex = 0;
    for (const user of usersArray) {
        if (user.username === currUser) {
            currUserAccount = user;
            break;
        }
        userAccountIndex++;
    }

    let currUserProfile = null;
    let userProfileIndex = 0;
    for (const user of profilesArray) {
        if (user.username === currUser) {
            currUserProfile = user;
            break;
        }
        userProfileIndex++;
    }
    
    const [userDetails, setUserDetails] = useState({username: currUserAccount.username,
                                                    email: currUserAccount.email,
                                                    firstName: currUserAccount.firstName,
                                                    lastName: currUserAccount.lastName
                                                    });

    const [profileDetails, setProfileDetails] = useState({age: currUserProfile.age,
                                                          weight: currUserProfile.weight,
                                                          height: currUserProfile.height,
                                                          activityLevel: "sedentary",
                                                          dietaryPreferences: "none",
                                                          healthGoals: "maintain"
                                                        });
    
    function handleFirstNameChange(e) {
        setUserDetails({...userDetails, firstName: e.target.value.replace(/\s/g, '')});
        console.log(userDetails);
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

    function handleAgeChange(e) {
        setProfileDetails({...profileDetails, age: e.target.value});
    }

    function handleHeightChange(e) {
        setProfileDetails({...profileDetails, height: e.target.value});
    }

    function handleWeightChange(e) {
        setProfileDetails({...profileDetails, weight: e.target.value});
    }

    function handleActivityLevelChange(e) {
        setProfileDetails({...profileDetails, activityLevel: e.target.value});
    }

    function handleDietaryPreferenceChange(e) {
        setProfileDetails({...profileDetails, dietaryPreferences: e.target.value});
    }

    function handleHealthGoalChange(e) {
        setProfileDetails({...profileDetails, healthGoals: e.target.value});
    }

    function handleProfileSaveChanges(e) {
        e.preventDefault();
        profilesArray[userProfileIndex].age = profileDetails.age;
        profilesArray[userProfileIndex].height = profileDetails.height;
        profilesArray[userProfileIndex].weight = profileDetails.weight;
        profilesArray[userProfileIndex].activityLevel = profileDetails.activityLevel;
        profilesArray[userProfileIndex].dietaryPreferences = profileDetails.dietaryPreferences;
        profilesArray[userProfileIndex].healthGoals = profileDetails.healthGoals;
        localStorage.setItem("profiles", JSON.stringify(profilesArray));
    }

    return(
        <div className="edit-profile-container">
            <div className="account-details-container">
                <h1>Edit profile</h1>
                <form className="account-details-form">
                    <h2>Account Details:</h2>
                    <div className="username-group">
                        <label>Username:</label>
                        <input value={userDetails.username} readOnly></input>
                    </div>
                    <div className="name-container">
                        <div className="first-name-group">
                            <label>First name:</label>
                            <input value={userDetails.firstName} onChange={handleFirstNameChange}></input>
                            {/* prevent user from having spaces */}
                        </div>
                        <div className="last-name-group">
                            <label>Last name:</label>
                            <input value={userDetails.lastName} onChange={handleLastNameChange}></input>
                            {/* prevent user from having spaces */}
                        </div>
                    </div>
                    <div className="email-group">
                        <label>Email:</label>
                        <input type="email" value={userDetails.email} readOnly></input>
                    </div>
                    <Link to="/passwordchange">
                        <button>Change password</button>
                    </Link>
                    <div className="form-submit-container">
                        <button onClick={handleAccountSaveChanges}>Save Changes</button>
                    </div>
                </form>
            </div>
            <div className="goals-container">
                <h2>Goals:</h2>
                <form className="goals-form">
                    <div className="age-group">
                        <label>Age:</label>
                        <input type="number" min="1" step="1" onChange={handleAgeChange}></input>
                    </div>
                    <div className="height-group">
                        <label>Height:</label>
                        <input type="number" min="0.01" step="any" onChange={handleHeightChange}></input>
                    </div>
                    <div className="weight-group">
                        <label>Weight:</label>
                        <input type="number" min="0.01" step="any" onChange={handleWeightChange}></input>
                    </div>
                    <div className="activity-level-group">
                        <label htmlFor="activity-levels">Activity level:</label>
                        <select id="activity-levels" name="activity-level" onChange={handleActivityLevelChange}>
                            <option value="sedentary">Sedentary: little to no excercise</option>
                            <option value="light">Light: excercise 1-3 times/week</option>
                            <option value="moderate">Moderate: excercise 4-5 times/week</option>
                            <option value="active">Active: daily excercise or intense excercise 3-4 times/week</option>
                            <option value="very-active">Very active: intense excercise 6-7 times/week</option>
                            <option value="extra-active">Extra active: very intense excercise daily, or physical job</option>
                        </select>
                    </div>
                    <div className="dietary-preferences-group">
                        <label htmlFor="dietary-preferences">Dietary preferences:</label>
                        <select id="dietary-preferences" name="dietary-preference" onChange={handleDietaryPreferenceChange}>
                            <option value="none">None</option>
                            <option value="vegan">Vegan</option>
                            <option value="vegetarian">Vegetarian -</option>
                            <option value="pescatarian">Pescatarian</option>
                            <option value="paleo">Paleo</option>
                            <option value="keto">Keto</option>
                            <option value="gluten-free">Gluten-free</option>
                            <option value="dairy-free">Dairy-free</option>
                        </select>
                    </div>
                    <div className="health-goal-group">
                        <label htmlFor="health-goals">Health goal:</label>
                        <select id="health-goals" name="health-goal" onChange={handleHealthGoalChange}>
                            <option value="maintain">Maintain weight</option>
                            <option value="mild-loss">Mild weight loss</option>
                            <option value="loss">Weight loss</option>
                            <option value="extreme-loss">Extreme weight loss</option>
                            <option value="mild-gain">Mild weight gain</option>
                            <option value="gain">Weight gain</option>
                            <option value="extreme-gain">Extreme weight gain</option>
                        </select>
                    </div>
                    <div className="form-submit-container">
                        <button onClick={handleProfileSaveChanges}>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;