import React, { useState, useEffect, useRef } from 'react';

function RecipeForm(props) {
  const [textarea, setTextarea] = useState(props.edit ? props.edit.value : '');

  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();
  });

  const handleChange = e => {
    setTextarea(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: textarea
    });
    setTextarea('');
  };

  return (
    <form onSubmit={handleSubmit} className='recipe-form'>
      {props.edit ? (
        <>
          <textarea
            placeholder='Edytuj swój przepis'
            value={textarea}
            onChange={handleChange}
            name='text'
            ref={textareaRef}
            className='recipe-textarea edit'
          />
          <button onClick={handleSubmit} className='recipe-button edit'>
            Edytuj
          </button>
        </>
      ) : (
        <>
          <textarea
            placeholder='Dodaj przepis'
            value={textarea}
            onChange={handleChange}
            name='text'
            className='recipe-textarea'
            ref={textareaRef}
          />
          <button onClick={handleSubmit} className='recipe-button'>
            Dodaj przepis
          </button>
        </>
      )}
    </form>
  );
}

export default RecipeForm;
