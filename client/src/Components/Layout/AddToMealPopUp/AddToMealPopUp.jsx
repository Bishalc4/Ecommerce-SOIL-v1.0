import { useState, useEffect } from 'react';
import "./AddToMealPopUp.scss"

// eslint-disable-next-line react/prop-types
function AddToMealPopUp({onClose, id}) {
  const value = id;
  // const app_id = "c57a8075";
  // const app_key = "a36807d73b336db98850d7a307c3f226";
  /*To get data:
    https://api.edamam.com/api/recipes/v2/{value}?type=public&app_id={app_id}&app_key={app_key}
  */
  const [meal, setMeal] = useState({ day: "Monday", meal: "Breakfast" });

  /*access local storage and make it so that this gets the current user and makes the
  current user's mealPlan = the below meal plan (this will make it easy to do)*/

  const [mealPlan, setMealPlan] = useState({Sunday: [],
                                            Monday: [],
                                            Tuesday: [],
                                            Wednesday: [],
                                            Thursday: [],
                                            Friday: [],
                                            Saturday: []
                                          });

  useEffect(() => {
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
  }, [mealPlan]);
  
  function handleDayChange(e) {
    setMeal({...meal, day: e.target.value});
  }

  function handleMealChange(e) {
    setMeal({...meal, meal: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    //when the user submits the form modify the savedMealPlan variable with their updated values
      //get the previous savedMealPlan object
      //make the relevant modifications
      //set if necessary 
    onClose();  // close the popup after submission
  }

  useEffect(() => {
    /*when the meal plan is changed update the local storage for the current user
    with the new user's meal preferences*/
  }, [mealPlan]);

  return (
    <div className="add-to-meal-pop-up-container">
      <p>{value}</p>
      <form onSubmit={handleSubmit}>
          <select value={meal.day} onChange={handleDayChange}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <select value={meal.meal} onChange={handleMealChange}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        <button type="submit" >Add</button>
      </form>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default AddToMealPopUp
