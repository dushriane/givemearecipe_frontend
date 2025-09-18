// src/utils/recipeUtils.ts

export const generateRecipeSuggestions = (ingredients: string[], preferences: string[]): string[] => {
    // Logic to generate recipe suggestions based on ingredients and user preferences
    const recipes = [
        { name: "Pasta Primavera", ingredients: ["pasta", "vegetables"], preferences: ["vegetarian"] },
        { name: "Chicken Stir Fry", ingredients: ["chicken", "vegetables"], preferences: ["gluten-free"] },
        // Add more recipes as needed
    ];

    return recipes
        .filter(recipe => 
            ingredients.some(ingredient => recipe.ingredients.includes(ingredient)) &&
            preferences.every(pref => recipe.preferences.includes(pref))
        )
        .map(recipe => recipe.name);
};

export const filterRecipesByDiet = (recipes: string[], diet: string): string[] => {
    // Logic to filter recipes based on dietary restrictions
    const dietaryRestrictions = {
        vegetarian: ["Pasta Primavera"],
        glutenFree: ["Chicken Stir Fry"],
        // Add more dietary restrictions as needed
    };

    return recipes.filter(recipe => dietaryRestrictions[diet]?.includes(recipe));
};