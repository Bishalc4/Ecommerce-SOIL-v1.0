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
                                                        sex: currUserProfile.sex,
                                                        weight: currUserProfile.weight,
                                                        height: currUserProfile.height,
                                                        activityLevel: currUserProfile.activityLevel,
                                                        dietaryPreferences: currUserProfile.dietaryPreferences,
                                                        healthGoals: currUserProfile.healthGoals
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

    function handleSexChange(e) {
        setProfileDetails({...profileDetails, sex: e.target.value});
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
        profilesArray[userProfileIndex].sex = profileDetails.sex;
        profilesArray[userProfileIndex].height = profileDetails.height;
        profilesArray[userProfileIndex].weight = profileDetails.weight;
        profilesArray[userProfileIndex].activityLevel = profileDetails.activityLevel;
        profilesArray[userProfileIndex].dietaryPreferences = profileDetails.dietaryPreferences;
        profilesArray[userProfileIndex].healthGoals = profileDetails.healthGoals;
        localStorage.setItem("profiles", JSON.stringify(profilesArray));
        console.log(profileDetails.activityLevel)
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
                        <input type="number" min="1" step="1" onChange={handleAgeChange} value={profileDetails.age}></input>
                    </div>
                    <div>
                        <input type="radio" id="male" name="sex" onChange={handleSexChange} checked={profileDetails.sex === "male"} value="male"/>
                        <label htmlFor="male">Male</label>

                        <input type="radio" id="female" name="sex" onChange={handleSexChange} checked={profileDetails.sex === "female"} value="female"/>
                        <label htmlFor="female">Female</label>
                    </div>
                    <div className="height-group">
                        <label>Height:</label>
                        <input type="number" min="0.01" step="any" onChange={handleHeightChange} value={profileDetails.height}></input>
                    </div>
                    <div className="weight-group">
                        <label>Weight:</label>
                        <input type="number" min="0.01" step="any" onChange={handleWeightChange} value={profileDetails.weight}></input>
                    </div>
                    <div className="activity-level-group">
                        <p>Activity level:</p>
                        <input type="radio" id="sedentary" name="activity-level" value="sedentary" checked={profileDetails.activityLevel === "sedentary"} onChange={handleActivityLevelChange} />
                        <label htmlFor="sedentary">Sedentary: little to no exercise</label><br />

                        <input type="radio" id="light" name="activity-level" value="light" checked={profileDetails.activityLevel === "light"} onChange={handleActivityLevelChange} />
                        <label htmlFor="light">Light: exercise 1-3 times/week</label><br />

                        <input type="radio" id="moderate" name="activity-level" value="moderate" checked={profileDetails.activityLevel === "moderate"} onChange={handleActivityLevelChange} />
                        <label htmlFor="moderate">Moderate: exercise 4-5 times/week</label><br />

                        <input type="radio" id="active" name="activity-level" value="active" checked={profileDetails.activityLevel === "active"} onChange={handleActivityLevelChange} />
                        <label htmlFor="active">Active: daily exercise or intense exercise 3-4 times/week</label><br />

                        <input type="radio" id="very-active" name="activity-level" value="very-active" checked={profileDetails.activityLevel === "very-active"} onChange={handleActivityLevelChange} />
                        <label htmlFor="very-active">Very active: intense exercise 6-7 times/week</label><br />

                        <input type="radio" id="extra-active" name="activity-level" value="extra-active" checked={profileDetails.activityLevel === "extra-active"} onChange={handleActivityLevelChange} />
                        <label htmlFor="extra-active">Extra active: very intense exercise daily, or physical job</label><br />
                    </div>
                    <div className="dietary-preferences-group">
                        <p>Dietary preferences:</p>
                        <input type="radio" id="none" name="dietary-preference" value="none" checked={profileDetails.dietaryPreferences === "none"} onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="none">None</label><br />

                        <input type="radio" id="vegan" name="dietary-preference" value="vegan" checked={profileDetails.dietaryPreferences === "vegan"} onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="vegan">Vegan</label><br />

                        <input type="radio" id="vegetarian" name="dietary-preference" value="vegetarian" checked={profileDetails.dietaryPreferences === "vegetarian"} onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="vegetarian">Vegetarian</label><br />

                        <input type="radio" id="pescatarian" name="dietary-preference" value="pescatarian" checked={profileDetails.dietaryPreferences === "pescatarian"} onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="pescatarian">Pescatarian</label><br />

                        <input type="radio" id="paleo" name="dietary-preference" value="paleo" checked={profileDetails.dietaryPreferences === "paleo"} onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="paleo">Paleo</label><br />

                        <input type="radio" id="keto" name="dietary-preference" value="keto" checked={profileDetails.dietaryPreferences === "keto"} onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="keto">Keto</label><br />

                        <input type="radio" id="gluten-free" name="dietary-preference" value="gluten-free" checked={profileDetails.dietaryPreferences === "gluten-free"} onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="gluten-free">Gluten-free</label><br />

                        <input type="radio" id="dairy-free" name="dietary-preference" value="dairy-free" checked={profileDetails.dietaryPreferences === "dairy-free"} onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="dairy-free">Dairy-free</label><br />
                    </div>
                    <div className="health-goal-group">
                        <p>Health goal:</p>
                        <input type="radio" id="maintain" name="health-goal" value="maintain" checked={profileDetails.healthGoals === "maintain"} onChange={handleHealthGoalChange} />
                        <label htmlFor="maintain">Maintain weight</label><br />

                        <input type="radio" id="mild-loss" name="health-goal" value="mild-loss" checked={profileDetails.healthGoals === "mild-loss"} onChange={handleHealthGoalChange} />
                        <label htmlFor="mild-loss">Mild weight loss</label><br />

                        <input type="radio" id="loss" name="health-goal" value="loss" checked={profileDetails.healthGoals === "loss"} onChange={handleHealthGoalChange} />
                        <label htmlFor="loss">Weight loss</label><br />

                        <input type="radio" id="extreme-loss" name="health-goal" value="extreme-loss" checked={profileDetails.healthGoals === "extreme-loss"} onChange={handleHealthGoalChange} />
                        <label htmlFor="extreme-loss">Extreme weight loss</label><br />

                        <input type="radio" id="mild-gain" name="health-goal" value="mild-gain" checked={profileDetails.healthGoals === "mild-gain"} onChange={handleHealthGoalChange} />
                        <label htmlFor="mild-gain">Mild weight gain</label><br />

                        <input type="radio" id="gain" name="health-goal" value="gain" checked={profileDetails.healthGoals === "gain"} onChange={handleHealthGoalChange} />
                        <label htmlFor="gain">Weight gain</label><br />

                        <input type="radio" id="extreme-gain" name="health-goal" value="extreme-gain" checked={profileDetails.healthGoals === "extreme-gain"} onChange={handleHealthGoalChange} />
                        <label htmlFor="extreme-gain">Extreme weight gain</label><br />
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