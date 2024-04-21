// import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import "./DailyMealPlan.scss"
import MealCard from '../MealCard/MealCard';

function DailyMealPlan(props) {
    const day = props.day;

    const currUser = JSON.parse(localStorage.getItem("user") || 'null');
    var mealsArray = JSON.parse(localStorage.getItem("meals") || '[]');

    const userIndex = mealsArray.findIndex(user => user.username === currUser);

    const meals = mealsArray[userIndex].diet[day];

    return(
        <div className='day-container'>
            <h1>{day}</h1>
            <div className='day-content'>
                {Object.entries(meals).map(([mealName, mealValue]) => (
                    mealValue && <MealCard key={mealName} recipe={mealValue} meal={mealName} day={day}/>
                ))}
            </div>
        </div>
    );
}
DailyMealPlan.propTypes = {
    day: PropTypes.string.isRequired,
}

export default DailyMealPlan