import React, { useState } from 'react';

const IngredientRecognizer: React.FC = () => {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleAddIngredient = () => {
        if (input.trim()) {
            setIngredients([...ingredients, input.trim()]);
            setInput('');
        }
    };

    const handleRemoveIngredient = (ingredient: string) => {
        setIngredients(ingredients.filter(item => item !== ingredient));
    };

    return (
        <div className="ingredient-recognizer">
            <h2>Ingredient Recognizer</h2>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter an ingredient"
            />
            <button onClick={handleAddIngredient}>Add Ingredient</button>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                        <button onClick={() => handleRemoveIngredient(ingredient)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientRecognizer;