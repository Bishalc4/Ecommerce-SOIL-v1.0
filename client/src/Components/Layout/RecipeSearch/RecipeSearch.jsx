import { useState, useEffect } from "react";
import RecipeCard from "../Recipe/RecipeCard";
import "./RecipeSearch.scss"

function RecipeSearch() {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("Tofu"); //change this to "" after
    const appId = "c57a8075";
    const appKey = "a36807d73b336db98850d7a307c3f226";

    useEffect(() => {
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`)
          .then(response => response.json())
          .then(data => {
            setRecipes(data.hits);
          })
          .catch(error => {
            console.error('Error fetching recipes:', error);
          });
      }, []);
    


    return(
        <div className="recipe-search-container">
            <h1>Recipes</h1>
            <div className="recipes">
                <ul>
                    {recipes.map((recipe, index) => (
                        <RecipeCard key={index} recipe={recipe.recipe} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RecipeSearch