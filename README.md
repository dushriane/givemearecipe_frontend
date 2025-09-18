# Recipe Generation App

## Overview
The Recipe Generation App is a web application designed to help users recognize ingredients, suggest recipes based on those ingredients, and track user preferences. Built with React and TypeScript, this app leverages modern web technologies to provide a seamless user experience.

## Features
- **Ingredient Recognition**: Users can input ingredients, and the app will recognize them using APIs.
- **Recipe Suggestions**: Based on recognized ingredients and user preferences, the app suggests relevant recipes.
- **User Preferences Tracking**: Users can manage their dietary preferences, allergies, and restrictions.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tooling**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Form Handling**: React Hook Form
- **Animations**: Framer Motion
- **Server State Management**: React Query/TanStack Query

## Project Structure
```
recipe-gen-app
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── IngredientRecognizer.tsx
│   │   ├── RecipeSuggester.tsx
│   │   └── PreferenceTracker.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Recipes.tsx
│   │   └── Preferences.tsx
│   ├── hooks
│   │   ├── useIngredients.ts
│   │   ├── useRecipes.ts
│   │   └── usePreferences.ts
│   ├── context
│   │   ├── IngredientsContext.tsx
│   │   ├── RecipesContext.tsx
│   │   └── PreferencesContext.tsx
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── recipeUtils.ts
│   └── assets
│       └── (empty)
├── public
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd recipe-gen-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the app.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.