import { useState, useEffect } from 'react';
import { Recipe } from '../types';

const useRecipes = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchRecipes = async (ingredients: string[]) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/recipes?ingredients=${ingredients.join(',')}`);
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const data = await response.json();
            setRecipes(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { recipes, loading, error, fetchRecipes };
};

export default useRecipes;