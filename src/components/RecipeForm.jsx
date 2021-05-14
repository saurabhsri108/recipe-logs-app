import React, { useContext } from 'react';
import Ingredient from './Ingredient';
import { RecipeContext } from './App';
import { v4 as uuidv4 } from 'uuid';

const RecipeForm = ({ recipe }) => {
  const { recipeChange, editRecipe } = useContext(RecipeContext);
  const { id, name, cookTime, servings, instructions, ingredients } = recipe;

  function recipeChanges(changes) {
    recipeChange(id, { ...recipe, ...changes });
  }

  function ingredientChangeHandler(id, ingredient) {
    const newIngredients = [...ingredients];
    const index = newIngredients.findIndex(
      (ingredient) => ingredient.id === id
    );
    newIngredients[index] = ingredient;
    recipeChanges({ ingredients: newIngredients });
  }

  function addNewIngredientHandler() {
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: '',
    };
    recipeChanges({ ingredients: [...recipe.ingredients, newIngredient] });
  }

  function deleteIngredientHandler(id) {
    recipeChanges({
      ingredients: recipe.ingredients.filter(
        (ingredient) => ingredient.id !== id
      ),
    });
  }

  return (
    <div className='recipe-form'>
      <div className='recipe-header'>
        <h3>Recipe Form</h3>
        <button
          className='btn btn--danger'
          onClick={() => editRecipe(undefined)}
        >
          &times;
        </button>
      </div>
      <div className='recipe-form__content'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onInput={(e) => recipeChanges({ name: e.target.value })}
          placeholder='Recipe Name'
        />
        <label htmlFor='cookTime'>Cook Time</label>
        <input
          type='text'
          id='cookTime'
          name='cookTime'
          value={cookTime}
          onInput={(e) => recipeChanges({ cookTime: e.target.value })}
          placeholder='H:mm'
        />
        <label htmlFor='servings'>Servings</label>
        <input
          type='text'
          name='servings'
          id='servings'
          value={servings}
          onInput={(e) =>
            recipeChanges({ servings: parseInt(e.target.value) || '' })
          }
          placeholder='0'
        />
        <label htmlFor='instructions'>Instructions</label>
        <textarea
          name='instructions'
          id='instructions'
          rows='5'
          value={instructions}
          onInput={(e) => recipeChanges({ instructions: e.target.value })}
          placeholder='Recipe instructions'
        ></textarea>
      </div>
      <label>Ingredients</label>
      <div className='recipe-form__ingredients'>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {ingredients.map((ingredient) => (
          <Ingredient
            key={ingredient.id}
            ingredientChange={ingredientChangeHandler}
            ingredient={ingredient}
            deleteIngredient={deleteIngredientHandler}
          />
        ))}
      </div>
      <div className='btn-content'>
        <button
          className='btn btn--primary btn--large'
          onClick={addNewIngredientHandler}
        >
          Add Integredient
        </button>
      </div>
    </div>
  );
};

export default RecipeForm;
