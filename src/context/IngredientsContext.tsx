import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Ingredient } from '../types';

interface IngredientsContextType {
  ingredients: Ingredient[];
  addIngredient: (ingredient: Ingredient) => void;
  removeIngredient: (ingredientId: string) => void;
}

const IngredientsContext = createContext<IngredientsContextType | undefined>(undefined);

export const IngredientsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const addIngredient = (ingredient: Ingredient) => {
    setIngredients((prev) => [...prev, ingredient]);
  };

  const removeIngredient = (ingredientId: string) => {
    setIngredients((prev) => prev.filter((ingredient) => ingredient.id !== ingredientId));
  };

  return (
    <IngredientsContext.Provider value={{ ingredients, addIngredient, removeIngredient }}>
      {children}
    </IngredientsContext.Provider>
  );
};

export const useIngredients = (): IngredientsContextType => {
  const context = useContext(IngredientsContext);
  if (!context) {
    throw new Error('useIngredients must be used within an IngredientsProvider');
  }
  return context;
};