import { useState, useEffect } from "react";
import RecipeSearch from "../../Components/Layout/RecipeSearch/RecipeSearch.jsx"
import { calculateMacros } from "../../Functions/MacrosCalculator"
import "./DietNutrition.scss"

//Page for diet and nutrition
function DietNutrition(){
    const currUser = JSON.parse((localStorage.getItem("user"))); //get curr user
    var profilesArray = JSON.parse(localStorage.getItem("profiles")); //get "profiles" from localStorage

    let currUserProfile = null;
    let userProfileIndex = 0; //index of the current user within the profilesArray
    for (const user of profilesArray) {
        if (user.username === currUser) { //makes currUserProfile the curr users object from the profilesArray
            currUserProfile = user; 
            break;
        }
        userProfileIndex++;
    }

    const [profileDetails, setProfileDetails] = useState({age: currUserProfile.age,
                                                        sex: currUserProfile.sex,
                                                        weight: currUserProfile.weight,
                                                        height: currUserProfile.height,
                                                        activityLevel: currUserProfile.activityLevel,
                                                        healthGoals: currUserProfile.healthGoals
                                                        });

    const [showInputs, setShowInputs] = useState(true); //to show the macros, recipe search etc.
    const [macros, setMacros] = useState(null); //stores curr user's macros requirements

    function hasUser(user, usersArray) {
        return usersArray.some(user_ => user_.username === user);
    }

    useEffect(() => {
        if (localStorage.getItem("macros") === null) { //adds key to local storage if it doesn't already exist
            localStorage.setItem("macros", JSON.stringify([]));
        }
        
        let macrosArray = JSON.parse(localStorage.getItem("macros"));

        if (!hasUser(currUser, macrosArray)) {
            const newUser = { username: currUser, macrosDetails: {}}; //creates an object for the new user (will be stored in macros key)
            macrosArray.push(newUser); //pushes to the JS array
            localStorage.setItem("macros", JSON.stringify(macrosArray)); //place it in the local storage
        }

        if (hasUser(currUser, macrosArray)) { //if the username is already in macros
            const userIndex = macrosArray.findIndex(user => user.username === currUser);

            macrosArray[userIndex].macrosDetails = macros;
            localStorage.setItem("macros", JSON.stringify(macrosArray));
        }

        if (localStorage.getItem("meals") === null) { //adds key to local storage if it doesn't already exist
            localStorage.setItem("meals", JSON.stringify([]));
        }
    }, [macros, currUser])

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
        profilesArray[userProfileIndex].healthGoals = profileDetails.healthGoals;
        localStorage.setItem("profiles", JSON.stringify(profilesArray));

        setMacros(calculateMacros(profileDetails));

        setShowInputs(false);
    }

    return(
        <div className="diet-container">
            {/* <div className="landing-row">
                <h1>Diet Nutrition</h1>
                <p>Use our free macros calculator to determine your daily caloric
                    and nutrient needs.
                </p>
            </div> */}
            <form className="goals-form"  onSubmit={handleProfileSaveChanges}>
                <div className="column">
                    <h2>Age</h2>
                    <input type="number" min="1" step="1" max="80" onChange={handleAgeChange} value={profileDetails.age} required></input>
                    <h2>Sex</h2>
                    <div className="sex-container">
                        <input type="radio" id="male" name="sex" onChange={handleSexChange} checked={profileDetails.sex === "male"} value="male" required/>
                        <label htmlFor="male" className="buttton-style">Male</label>

                        <input type="radio" id="female" name="sex" onChange={handleSexChange} checked={profileDetails.sex === "female"} value="female" required/>
                        <label htmlFor="female" className="buttton-style">Female</label>
                    </div>
                    <h2>Height (cm)</h2>
                    <input type="number" min="100" step="0.01" onChange={handleHeightChange} value={profileDetails.height} required></input>
                    <h2>Weight (kg)</h2>
                    <input type="number" min="30" step="0.01" onChange={handleWeightChange} value={profileDetails.weight} required></input>
                </div>
                <div className="column">
                    <h2>Activity level</h2>
                    <div className="activity-level-container">
                        <div className="option-container">
                            <input type="radio" id="sedentary" name="activity-level" value="sedentary" checked={profileDetails.activityLevel === "sedentary"} onChange={handleActivityLevelChange} />
                            <label htmlFor="sedentary">Sedentary<br />little to no exercise</label><br />
                        </div>
                        <div className="option-container">
                            <input type="radio" id="light" name="activity-level" value="light" checked={profileDetails.activityLevel === "light"} onChange={handleActivityLevelChange} />
                            <label htmlFor="light">Light<br />exercise 1-3 times/week</label><br />
                        </div>
                        <div className="option-container">
                            <input type="radio" id="moderate" name="activity-level" value="moderate" checked={profileDetails.activityLevel === "moderate"} onChange={handleActivityLevelChange} />
                            <label htmlFor="moderate">Moderate<br />exercise 4-5 times/week</label><br />
                        </div>
                        <div className="option-container">
                            <input type="radio" id="active" name="activity-level" value="active" checked={profileDetails.activityLevel === "active"} onChange={handleActivityLevelChange} />
                            <label htmlFor="active">Active<br />daily exercise or intense exercise 3-4 times/week</label><br />
                        </div>
                        <div className="option-container">
                            <input type="radio" id="extra-active" name="activity-level" value="extra-active" checked={profileDetails.activityLevel === "extra-active"} onChange={handleActivityLevelChange} />
                            <label htmlFor="extra-active">Extra active<br />very intense exercise daily, or physical job</label><br />
                        </div>   
                    </div>
                </div>
                <div className="column">
                    <div className="health-goal-group">
                        <h2>Health goal</h2>
                        <div className="option-container">
                            <input type="radio" id="extreme-loss" name="health-goal" value="extreme-loss" checked={profileDetails.healthGoals === "extreme-loss"} onChange={handleHealthGoalChange} />
                            <label htmlFor="extreme-loss">Extreme weight loss</label><br />
                        </div>
                        <div className="option-container">
                            <input type="radio" id="loss" name="health-goal" value="loss" checked={profileDetails.healthGoals === "loss"} onChange={handleHealthGoalChange} />
                            <label htmlFor="loss">Weight loss</label><br />
                        </div>
                        <div className="option-container">
                            <input type="radio" id="maintain" name="health-goal" value="maintain" checked={profileDetails.healthGoals === "maintain"} onChange={handleHealthGoalChange} />
                            <label htmlFor="maintain">Maintain weight</label><br />
                        </div>
                        <div className="option-container">
                            <input type="radio" id="gain" name="health-goal" value="gain" checked={profileDetails.healthGoals === "gain"} onChange={handleHealthGoalChange} />
                            <label htmlFor="gain">Weight gain</label><br />
                        </div>
                        <div className="option-container">
                            <input type="radio" id="extreme-gain" name="health-goal" value="extreme-gain" checked={profileDetails.healthGoals === "extreme-gain"} onChange={handleHealthGoalChange} />
                            <label htmlFor="extreme-gain">Extreme weight gain</label><br />
                        </div>
                    </div>
                    <button type="submit">Calculate macros</button>
                </div>
            </form>
            <div className="macros-row">
                {showInputs ? (
                    <>
                    </>
                ) : (
                    <div className="macros-container">
                        <h1>{macros.calories} calories per day</h1>
                        <h2>Protein {macros.protein} grams per day</h2>
                        <h2>Fat {macros.fat} grams per day</h2>
                        <h2>Carbohydrate {macros.carbohydrates} grams per day</h2>
                    </div>
                )}
            </div>
            <div>
                {showInputs ? (
                    <>
                    </>
                ) : (
                    <div>
                        <RecipeSearch/>
                    </div>
                )}
            </div>
        </ div>
    );
}

export default DietNutrition;