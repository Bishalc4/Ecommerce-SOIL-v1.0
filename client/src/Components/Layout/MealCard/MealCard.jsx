import { useState, useEffect } from 'react';
import "./MealCard.scss"

function MealCard(recipe) {
    const [recipeData, setRecipeData] = useState({});

    const recipeID = recipe.recipe;
    const app_id = "c57a8075";
    const app_key = "a36807d73b336db98850d7a307c3f226";
    const recipeURL = `https://api.edamam.com/api/recipes/v2/${recipeID}?type=public&app_id=${app_id}&app_key=${app_key}`;

    useEffect(() => {
        if (recipeID !== undefined) {
            fetch(recipeURL)
            .then(response => response.json())
            .then(data => {
                setRecipeData(data);
                console.log(data)
            })
            .catch(error => {
            console.error('Error fetching recipes:', error);
            });
        }
    }, [recipeID, recipeURL]);
    
    return(
        <div className='meal-card-container'>
            {Object.keys(recipeData).length === 0 ? (
                <></>
            ) : (
                <div className='meal-container'>
                    <h3 className='meal-title'>{recipeData.recipe.label}</h3>
                    <img src={recipeData.recipe.image} alt={recipeData.recipe.label} className='meal-image' />
                </div>
            )}
        </div>
    );
}

export default MealCard;
