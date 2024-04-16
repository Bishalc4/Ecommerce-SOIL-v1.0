import { useState } from 'react';
import "./AddToMealPopUp.scss"

// eslint-disable-next-line react/prop-types
function AddToMealPopUp({onClose, id}) {
  const value = id;

  const currUser = JSON.parse(localStorage.getItem("user") || 'null');
  var mealsArray = JSON.parse(localStorage.getItem("meals") || '[]');

  //get the index of the currUser in the mealsArray object
  let userAccountIndex = 0;
  for (const user of mealsArray) {
      if (user.username === currUser) {
          break;
      }
      userAccountIndex++;
  }

  const [meal, setMeal] = useState({day: "Monday", meal: "Breakfast"});

  const [mealPlan, setMealPlan] = useState(() => {
    const storedMealPlan = mealsArray[userAccountIndex].diet;
    console.log(storedMealPlan);
    return storedMealPlan ? storedMealPlan : { //this should only be used for when there is no currUser
      Sunday: { Breakfast: null, Lunch: null, Dinner: null },
      Monday: { Breakfast: null, Lunch: null, Dinner: null },
      Tuesday: { Breakfast: null, Lunch: null, Dinner: null },
      Wednesday: { Breakfast: null, Lunch: null, Dinner: null },
      Thursday: { Breakfast: null, Lunch: null, Dinner: null },
      Friday: { Breakfast: null, Lunch: null, Dinner: null },
      Saturday: { Breakfast: null, Lunch: null, Dinner: null }
    }
  });

  const addMealForDay = (day, mealType, newMeal) => {
    console.log(`Updating ${day} ${mealType} with ${newMeal}`);
    setMealPlan(prevPlan => {
        const updatedPlan = {
            ...prevPlan,
            [day]: {
                ...prevPlan[day],
                [mealType]: newMeal
            }
        };

        setTimeout(() => {
          mealsArray[userAccountIndex].diet = updatedPlan;
          localStorage.setItem("meals", JSON.stringify(mealsArray));
          onClose(); // Call onClose after the local storage is updated
        }, 0);
        return updatedPlan;
    });
  };

  function addMeal(e) {
    e.preventDefault();
    addMealForDay(meal.day, meal.meal, value);
  }
  
  function handleDayChange(e) {
    setMeal({...meal, day: e.target.value});
  }

  function handleMealChange(e) {
    setMeal({...meal, meal: e.target.value});
  }

  return (
    <div className="add-to-meal-pop-up-container">
      <p>{value}</p>
      <form>
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
          <button onClick={addMeal}>Add Meal</button>
      </form>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default AddToMealPopUp
