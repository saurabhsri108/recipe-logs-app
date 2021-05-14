import React from 'react';
import Ingredient from './Ingredient';

const RecipeForm = () => {
  return <div className="recipe-form">
    <h3>Recipe Form</h3>
    <div className="recipe-form__content">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Recipe Name" />
      <label htmlFor="cookTime">Cook Time</label>
      <input type="text" id="cookTime" name="cookTime" placeholder="H:mm" />
      <label htmlFor="servings">Servings</label>
      <input type="text" name="servings" id="servings" placeholder="0" />
      <label htmlFor="instructions">Instructions</label>
      <textarea name="instructions" id="instructions" rows="5" placeholder="Recipe instructions"></textarea>
    </div>
    <label>Ingredients</label>
    <div className="recipe-form__ingredients">
      <div>Name</div>
      <div>Amount</div>
      <div></div>
      <Ingredient />
      <Ingredient />
    </div>
    <div className="btn-content">              
      <button className="btn btn--primary btn--large">Add Integredient</button>
    </div>
  </div>;
};

export default RecipeForm;
