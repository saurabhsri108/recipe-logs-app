import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

import sampleRecipes from '../data/sampleRecipeList';
import newRecipeTemplate from '../data/newRecipeTemplate';

import '../css/App.css';

export const RecipeContext = createContext();

const App = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  /**
   * First time rendering of storedRecipes from LocalStorage
   */
  useEffect(() => {
    const recipesStoredJSON = localStorage.getItem('recipelogs.recipes');
    if (recipesStoredJSON != null) setRecipes(JSON.parse(recipesStoredJSON));
  }, []);

  /**
   * Setting of modified recipes and re-rendering on every recipes value change
   */
  useEffect(() => {
    localStorage.setItem('recipelogs.recipes', JSON.stringify(recipes));
  }, [recipes]);

  /**
   * Recipe Context API value for Large Scale State Management
   */
  const recipeContextValue = {
    addRecipe: addRecipeHandler,
    deleteRecipe: deleteRecipeHandler,
    editRecipe: editRecipeHandler,
    recipeChange: recipeChangeHandler,
  };

  function recipeChangeHandler(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((recipe) => recipe.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  /**
   * Function to handle adding of new recipes
   */
  function addRecipeHandler() {
    const id = uuidv4();
    const newRecipe = { ...newRecipeTemplate, id };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  /**
   * Function to delete the recipe
   * @param {number} id
   */
  function deleteRecipeHandler(id) {
    if (selectedRecipeId !== null && selectedRecipeId === id)
      setSelectedRecipeId(undefined);
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  /**
   * Function to select the recipe to edit
   */
  function editRecipeHandler(id) {
    setSelectedRecipeId(id);
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <div className='container__recipe'>
        <RecipeList recipes={recipes} />
      </div>
      <div className='container__recipe-edit'>
        {selectedRecipe && <RecipeForm recipe={selectedRecipe} />}
      </div>
    </RecipeContext.Provider>
  );
};

export default App;
