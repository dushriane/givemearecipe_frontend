import React from 'react';
import { useRecipes } from '../hooks/useRecipes';
import { usePreferences } from '../hooks/usePreferences';

const RecipeSuggester: React.FC = () => {
    const { recipes, fetchRecipes } = useRecipes();
    const { preferences } = usePreferences();

    const handleSuggestRecipes = () => {
        fetchRecipes(preferences);
    };

    return (
        <div className="recipe-suggester">
            <h2>Suggested Recipes</h2>
            <button onClick={handleSuggestRecipes} className="suggest-button">
                Suggest Recipes
            </button>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeSuggester;