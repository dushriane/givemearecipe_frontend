import { useState, useEffect } from 'react';

const useIngredients = () => {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const recognizeIngredients = async (input: string) => {
        setLoading(true);
        setError(null);
        try {
            // Simulate an API call to recognize ingredients
            const response = await fetch(`/api/recognize?input=${encodeURIComponent(input)}`);
            const data = await response.json();
            setIngredients(data.ingredients);
        } catch (err) {
            setError('Failed to recognize ingredients');
        } finally {
            setLoading(false);
        }
    };

    return {
        ingredients,
        loading,
        error,
        recognizeIngredients,
    };
};

export default useIngredients;