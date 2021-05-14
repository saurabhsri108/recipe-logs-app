import React from 'react';

const Ingredient = ({ ingredient, ingredientChange, deleteIngredient }) => {
  function ingredientChanges(changes) {
    ingredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        type='text'
        value={ingredient.name}
        onInput={(e) => ingredientChanges({ name: e.target.value })}
      />
      <input
        type='text'
        value={ingredient.amount}
        onInput={(e) => ingredientChanges({ amount: e.target.value })}
      />
      <button
        className='btn btn--danger'
        onClick={() => deleteIngredient(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
};

export default Ingredient;
