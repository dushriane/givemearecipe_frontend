import React from 'react';
import { useRecipes } from '../hooks/useRecipes';

const Recipes: React.FC = () => {
    const { recipes, loading, error } = useRecipes();

    if (loading) {
        return <div>Loading recipes...</div>;
    }

    if (error) {
        return <div>Error loading recipes: {error.message}</div>;
    }

    return (
        <div>
            <h1>Suggested Recipes</h1>
            {recipes.length === 0 ? (
                <p>No recipes found. Please try adding ingredients.</p>
            ) : (
                <ul>
                    {recipes.map(recipe => (
                        <li key={recipe.id}>
                            <h2>{recipe.title}</h2>
                            <p>{recipe.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Recipes;