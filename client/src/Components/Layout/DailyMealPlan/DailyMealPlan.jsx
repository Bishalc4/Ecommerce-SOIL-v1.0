import PropTypes from 'prop-types'
import "./DailyMealPlan.scss"

function DailyMealPlan(props) {
    const day = props.day;

    const currUser = JSON.parse(localStorage.getItem("user") || 'null');
    var mealsArray = JSON.parse(localStorage.getItem("meals") || '[]');

    const userIndex = mealsArray.findIndex(user => user.username === currUser);

    const meals = mealsArray[userIndex].diet[day];
    console.log(day, meals.Breakfast)

    return(
        <div className='day-container'>
            <h1>{day}</h1>
            {Object.entries(meals).map(([mealName, mealValue]) => (
                    <div key={mealName}>
                        <h3>{mealName}</h3>
                        <p>{mealValue}</p>
                    </div>
            ))}
        </div>
    );
}
DailyMealPlan.propTypes = {
    day: PropTypes.string.isRequired,
}

export default DailyMealPlan