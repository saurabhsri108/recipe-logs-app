import React, { useContext } from 'react';
import { RecipeContext } from './App';
import IngredientsList from './IngredientsList';

const Recipe = ({
  id,
  name,
  cookTime,
  servings,
  instructions,
  ingredients,
}) => {
  const { deleteRecipe } = useContext(RecipeContext);
  return (
    <div className='recipe'>
      <div className='recipe__header'>
        <h3 className='recipe__title'>{name}</h3>
        <div>
          <button className='btn btn--success'>Edit</button>
          <button
            className='btn btn--danger mr-1'
            onClick={() => deleteRecipe(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Cook Time:</span>
        <span className='recipe__value'>{cookTime}</span>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Servings:</span>
        <span className='recipe__value'>{servings}</span>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Instructions:</span>
        <div className='recipe__value recipe__value--intended recipe__instructions'>
          {instructions}
        </div>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Ingredients:</span>
        <div className='recipe__value recipe__value--intended'>
          <IngredientsList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
