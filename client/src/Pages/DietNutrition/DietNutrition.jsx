import { useState } from "react";
import "./DietNutrition.scss"

//Page for diet and nutrition
function DietNutrition(){
    const currUser = JSON.parse((localStorage.getItem("user")));
    const profiles = localStorage.getItem("profiles");
    var profilesArray = JSON.parse(profiles);

    let currUserProfile = null;
    let userProfileIndex = 0;
    for (const user of profilesArray) {
        if (user.username === currUser) {
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
    }

    return(
        <div className="diet-container">
            {/* <div className="landing-row">
                <h1>Diet Nutrition</h1>
                <p>Use our free macros calculator to determine your daily caloric
                    and nutrient needs.
                </p>
            </div> */}
            <div className="macros-calculator">
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
                    <div className="weight-group" id="input-form">
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
                        <button onClick={handleProfileSaveChanges}>Calculate macros</button>
                    </div>
                </form>
            </div>
        </ div>
    );
}

export default DietNutrition;