import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import "./MealCard.scss"

function MealCard({recipe}) {
    const [recipeData, setRecipeData] = useState({});

    const recipeID = recipe;
    const app_id = "c57a8075";
    const app_key = "a36807d73b336db98850d7a307c3f226";
    const recipeURL = `https://api.edamam.com/api/recipes/v2/${recipeID}?type=public&app_id=${app_id}&app_key=${app_key}`;

    //fetch recipe data from the url
    useEffect(() => {
        if (recipeID !== undefined) {
            fetch(recipeURL)
            .then(response => response.json())
            .then(data => {
                setRecipeData(data);
            })
            .catch(error => {
            console.error('Error fetching recipes:', error);
            });
        }
    }, [recipeID, recipeURL]);
    
    return(
        <>
            {Object.keys(recipeData).length === 0 ? (
                <></>
            ) : (
                <div className='meal-containers'>
                    <div className='meal-text'>
                        <a href={recipeData.recipe.url} target="_blank" rel="noopener noreferrer">
                            <h2>{recipeData.recipe.label}</h2>
                        </a>
                        <h3>Calories: {Math.round(parseFloat(recipeData.recipe.calories)/recipeData.recipe.yield)}g</h3>
                        <h3>Protein: {Math.round(parseFloat(recipeData.recipe.totalNutrients.PROCNT.quantity)/recipeData.recipe.yield)}g</h3>
                        <h3>Carbohydrates: {Math.round(parseFloat(recipeData.recipe.totalNutrients.CHOCDF.quantity)/recipeData.recipe.yield)}g</h3>
                        <h3>Fats: {Math.round(parseFloat(recipeData.recipe.totalNutrients.FAT.quantity)/recipeData.recipe.yield)}g</h3>
                    </div>
                    <div className='meal-image'>
                        <a href={recipeData.recipe.url} target="_blank" rel="noopener noreferrer">
                            <img src={recipeData.recipe.image} alt={recipeData.recipe.label} />
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
MealCard.propTypes = {
    recipe: PropTypes.string
}

export default MealCard;
