import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipeContext } from './App';
import '../css/RecipeList.css';

const RecipeList = ({ recipes }) => {
  const recipeCtx = useContext(RecipeContext);
  return (
    <div className='recipe-list'>
      <div className='recipe-list__recipes'>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className='recipe-list__add-btn-recipe-container'>
        <button
          className='btn btn--primary btn--large'
          onClick={recipeCtx.addRecipe}
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
