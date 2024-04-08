import "./RecipeCard.scss"

function RecipeCard(recipe) {
    //determine the average nutries per serving
    const recipeCalories = Math.round(recipe.recipe.calories/recipe.recipe.yield);
    const recipeFat = Math.round(recipe.recipe.totalNutrients.FAT.quantity/recipe.recipe.yield);
    const recipeProtein = Math.round(recipe.recipe.totalNutrients.PROCNT.quantity/recipe.recipe.yield);
    const recipeCarbohydrates = Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity/recipe.recipe.yield);

    //determine percentage of daily nutrient intake
    // const percentageDailyCalories = 100 * (recipeCalories/macros.calories);

    return(
        // make it so that if the user clicks on any part of the div aside from the button
        // it takes them to a recipe component that displays information about the recipe
        <div className="recipe-card-container">
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            {/* divides total amount by number of servings */}
            <div>
                <p>{recipeCalories} calories</p>
                <p>{recipeFat}g of fat</p>
                <p>{recipeProtein}g of protein</p>
                <p>{recipeCarbohydrates}g of carbohydrates</p>
            </div>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a><br/>
            <button>Add to planner</button>
        </div>
    );
}

export default RecipeCard