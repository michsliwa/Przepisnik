import React, { useState, useEffect} from 'react';
import RecipeForm from './RecipeForm';
import Recipe from './Recipe';
// import firebase from 'firebase';

function RecipeList() {
  //FIREBASE TO ADD

  // const textareaStorage = firebase.firestore().collection("recipeCollection");

  // const saveData =
  // textareaStorage.onSnapshot((querySnapshot) =>{
  //   const items = [];
  //   querySnapshot.forEach((doc)=>{
  //     items.push(doc.data())
  //   })
  //   setRecipes(items);

  // })
  // useEffect(() => {
  //   saveData();
  // }, [])

  const [recipes, setRecipes] = useState([]);
  const addRecipe = recipe => {
    if (!recipe.text || /^\s*$/.test(recipe.text)) {
      return;
    }
    
    const newRecipes = [recipe, ...recipes];
    setRecipes(newRecipes);
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
