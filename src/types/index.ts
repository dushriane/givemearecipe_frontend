export interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  unit: string;
}

export interface Recipe {
  id: string;
  title: string;
  ingredients: Ingredient[];
  instructions: string;
  imageUrl?: string;
}

export interface UserPreferences {
  dietaryRestrictions: string[];
  favoriteIngredients: string[];
  allergies: string[];
}