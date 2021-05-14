import React from 'react';
import Ingredients from './Ingredients';

const IngredientsList = ({ ingredients }) => {
  return (
    <div className='ingredient-grid'>
      {ingredients.map((ingredient) => (
        <Ingredients key={ingredient.id} {...ingredient} />
      ))}
    </div>
  );
};

export default IngredientsList;
