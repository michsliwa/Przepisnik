import React, { useState } from 'react';
import RecipeForm from './RecipeForm';
import Recipe from './Recipe';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = recipe => {
    if (!recipe.text || /^\s*$/.test(recipe.text)) {
      return;
    }

    const newRecipes = [recipe, ...recipes];

    setRecipes(newRecipes);
    console.log(...recipes);
  };

  const updateRecipe = (recipeId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setRecipes(prev => prev.map(item => (item.id === recipeId ? newValue : item)));
  };

  const removeRecipe = id => {
    const removedArr = [...recipes].filter(recipe => recipe.id !== id);

    setRecipes(removedArr);
  };

  return (
    <main className="main">
      <RecipeForm onSubmit={addRecipe} />
      <Recipe
        recipes={recipes}
        removeRecipe={removeRecipe}
        updateRecipe={updateRecipe}
      />
    </main>
  );
}

export default RecipeList;
