import { useState, useEffect } from "react";
import RecipeCard from "../Recipe/RecipeCard";
import "./RecipeSearch.scss"

function RecipeSearch() {
    const [recipes, setRecipes] = useState([]);
    const appId = "c57a8075";
    const appKey = "a36807d73b336db98850d7a307c3f226";

    const [query, setQuery] = useState({queryText: "",
                                        dietLabel: "", //default [from macros]
                                        healthLabel: "", //default [from macros]
                                        mealType: "",
                                        caloriesMinimum: "", //e.g. 100-300, 400 (max 400), 200+ (over 200) [from macros]
                                        caloriesMaximum: "",
                                        carbohydratesMinimum: "", //e.g. 100-300, 400 (max 400), 200+ (over 200)
                                        carbohydratesMaximum: "", //e.g. 100-300, 400 (max 400), 200+ (over 200)
                                        proteinMinimum: "", //e.g. 100-300, 400 (max 400), 200+ (over 200)                               
                                        proteinMaximum: "", //e.g. 100-300, 400 (max 400), 200+ (over 200)                               
    });

    useEffect(() => {
        
      }, []);
    
    function handleQueryText(e) {
        setQuery({...query, queryText: e.target.value});
    }

    function handleDietLabel(e) {
        setQuery({...query, dietLabel: e.target.value});
    }

    function handleHealthLabel(e) {
        setQuery({...query, healthLabel: e.target.value});
    }

    function handleMealType(e) {
        setQuery({...query, mealType: e.target.value});
    }

    function handleCaloriesMinimum(e) {
        setQuery({...query, caloriesMinimum: e.target.value});
    }

    function handleCaloriesMaximum(e) {
        setQuery({...query, caloriesMaximum: e.target.value});
    }

    function handleProteinMinimum(e) {
        setQuery({...query, proteinMinimum: e.target.value});
    }

    function handleProteinMaximum(e) {
        setQuery({...query, proteinMaximum: e.target.value});
    }

    function handleCarbohydratesMinimum(e) {
        setQuery({...query, carbohydratesMinimum: e.target.value});
    }

    function handleCarbohydratesMaximum(e) {
        setQuery({...query, carbohydratesMaximum: e.target.value});
    }

    function handleGetRecipes() {
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query.queryText}&app_id=${appId}&app_key=${appKey}`)
          .then(response => response.json())
          .then(data => {
            setRecipes(data.hits);
          })
          .catch(error => {
            console.error('Error fetching recipes:', error);
          });
    }

    return(
        <div className="recipe-search-container">
            <h1>Recipes</h1>
            <div className="search-container">
                <label>Search </label>
                <input type="search" placeholder=" Recipe or ingredient" value={query.queryText} onChange={handleQueryText}/>
                <button onClick={handleGetRecipes}>Search</button>
            </div>
            <div className="search-filters">
                <div>
                    <label htmlFor="dietLabel">Special dietary</label>
                    {/* change the name of this */}
                    <select id="dietLabel" name="dietLabel" value={query.dietLabel} onChange={handleDietLabel}>
                        <option value="">--</option>
                        <option value="high-fiber">High-fiber</option>
                        <option value="high-protein">High-protein</option>
                        <option value="low-carb">Low-carb</option>
                        <option value="low-fat">Low-fat</option>
                        <option value="low-sodium">Low-sodium</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="healthLabel">Dietary Preferences</label>
                    <select id="healthLabel" name="healthLabel" value={query.healthLabel} onChange={handleHealthLabel}>
                        <option value="">--</option>
                        <option value="alcohol-free">Alcohol-free</option>
                        <option value="dairy-free">Dairy-free</option>
                        <option value="egg-free">Low-carb</option>
                        <option value="fish-free">Low-fat</option>
                        <option value="gluten-free">Gluten-free</option>
                        <option value="keto-friendly">Keto-friendly</option>
                        <option value="low-sugar">Low-sugar</option>
                        <option value="vegan">Vegan</option>
                        <option value="vegetarian">Vegetarian</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="mealType">Meal</label>
                    <select id="mealType" name="mealType" value={query.mealType} onChange={handleMealType}>
                        <option value="">--</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                    </select>
                </div>
                <div>
                    <span>Calories</span>
                    <input id="caloriesMinimum" type="number" placeholder="Minimum calories" min="1" step="1" value={query.caloriesMinimum} onChange={handleCaloriesMinimum}/>
                    <span>-</span>
                    <input id="caloriesMaximum" type="number" placeholder="Maximum calories" min={query.caloriesMinimum + 1} step="1" value={query.caloriesMaximum} onChange={handleCaloriesMaximum}/>
                </div>
                <div>
                    <span>Protein</span>
                    <input id="proteinMinimum" type="number" placeholder="Minimum protein" min="1" step="1" value={query.proteinMinimum} onChange={handleProteinMinimum}/>
                    <span>-</span>
                    <input id="proteinMaximum" type="number" placeholder="Maximum protein" min={query.proteinMinimum + 1} step="1" value={query.proteinMaximum} onChange={handleProteinMaximum}/>
                </div>
                <div>
                    <span>Carbohydrates</span>
                    <input id="carbohydratesMinimum" type="number" placeholder="Minimum carbohydrates" min="1" step="1" value={query.carbohydratesMinimum} onChange={handleCarbohydratesMinimum}/>
                    <span>-</span>
                    <input id="carbohydratesMaximum" type="number" placeholder="Maximum carbohydrates" min={query.carbohydratesMinimum + 1} step="1" value={query.carbohydratesMaximum} onChange={handleCarbohydratesMaximum}/>
                </div>
            </div>
            <div className="recipe-container">
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