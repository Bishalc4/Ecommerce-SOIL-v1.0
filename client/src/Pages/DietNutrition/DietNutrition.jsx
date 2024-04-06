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
        weight: currUserProfile.weight,
        height: currUserProfile.height,
        activityLevel: "sedentary",
        dietaryPreferences: "none",
        healthGoals: "maintain"
      });

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
        <div className="diet-container">
            {/* <div className="landing-row">
                <h1>Diet Nutrition</h1>
                <p>Use our free macros calculator to determine your daily caloric
                    and nutrient needs.
                </p>
            </div> */}
            <div className="macros-calculator">
                <form className="goals-form">
                    <div className="age-group" id="input-form">
                        <label>Age:</label>
                        <input type="number" min="1" step="1" onChange={handleAgeChange}></input>
                    </div>
                    <div className="height-group" id="input-form">
                        <label>Height:</label>
                        <input type="number" min="0.01" step="any" onChange={handleHeightChange}></input>
                    </div>
                    <div className="weight-group" id="input-form">
                        <label>Weight:</label>
                        <input type="number" min="0.01" step="any" onChange={handleWeightChange}></input>
                    </div>
                    <div className="activity-level-group">
                        

                        <input type="radio" name="activity-level" value="sedentary" onChange={handleActivityLevelChange} />
                        <label htmlFor="sedentary"><b>Sedentary:</b> little to no exercise</label><br />

                        <input type="radio" name="activity-level" value="light" onChange={handleActivityLevelChange} />
                        <label htmlFor="light"><b>Light:</b> exercise 1-3 times/week</label><br />

                        <input type="radio" name="activity-level" value="moderate" onChange={handleActivityLevelChange} />
                        <label htmlFor="moderate"><b>Moderate:</b> exercise 4-5 times/week</label><br />

                        <input type="radio" name="activity-level" value="active" onChange={handleActivityLevelChange} />
                        <label htmlFor="active"><b>Active:</b> daily exercise or intense exercise 3-4 times/week</label><br />

                        <input type="radio" name="activity-level" value="very-active" onChange={handleActivityLevelChange} />
                        <label htmlFor="very-active"><b>Very active:</b> intense exercise 6-7 times/week</label><br />

                        <input type="radio" name="activity-level" value="extra-active" onChange={handleActivityLevelChange} />
                        <label htmlFor="extra-active"><b>Extra active:</b> very intense exercise daily, or physical job</label><br />
                    </div>
                    <div className="dietary-preferences-group">
                        <p>Dietary preferences:</p>
                        <input type="radio" id="none" name="dietary-preference" value="none" onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="none">None</label><br />

                        <input type="radio" id="vegan" name="dietary-preference" value="vegan" onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="vegan">Vegan</label><br />

                        <input type="radio" id="vegetarian" name="dietary-preference" value="vegetarian" onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="vegetarian">Vegetarian</label><br />

                        <input type="radio" id="pescatarian" name="dietary-preference" value="pescatarian" onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="pescatarian">Pescatarian</label><br />

                        <input type="radio" id="paleo" name="dietary-preference" value="paleo" onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="paleo">Paleo</label><br />

                        <input type="radio" id="keto" name="dietary-preference" value="keto" onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="keto">Keto</label><br />

                        <input type="radio" id="gluten-free" name="dietary-preference" value="gluten-free" onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="gluten-free">Gluten-free</label><br />

                        <input type="radio" id="dairy-free" name="dietary-preference" value="dairy-free" onChange={handleDietaryPreferenceChange} />
                        <label htmlFor="dairy-free">Dairy-free</label><br />
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
                        <button onClick={handleProfileSaveChanges}>Calculate macros</button>
                    </div>
                </form>
            </div>
        </ div>
    );
}

export default DietNutrition;