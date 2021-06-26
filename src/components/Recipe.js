import React, { useState } from 'react';
import RecipeForm from './RecipeForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Recipe = ({ recipes, removeRecipe, updateRecipe }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateRecipe(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <RecipeForm edit={edit} onSubmit={submitUpdate} />;
  }

  return recipes.map((recipe, index) => (
    <div
      className="recipe-row"
      key={index}
    >
      <pre key={recipe.id} onClick={recipe.id}>
        {recipe.text}
      </pre>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeRecipe(recipe.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: recipe.id, value: recipe.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Recipe;
