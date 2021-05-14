import React, { useState, useEffect, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RecipeList from './RecipeList';
import '../css/App.css';
import RecipeForm from './RecipeForm';

export const RecipeContext = createContext();

const App = () => {
  const [recipes, setRecipes] = useState(sampleRecipes);

  /**
   * First time rendering of storedRecipes from LocalStorage
   */
  useEffect(() => {
    const recipesStoredJSON = localStorage.getItem('recipelogs.recipes');
    if (recipesStoredJSON !== null) setRecipes(JSON.parse(recipesStoredJSON));
  }, []);

  /**
   * Setting of modified recipes and re-rendering on every recipes value change
   */
  useEffect(() => {
    localStorage.setItem('recipelogs.recipes', JSON.stringify(recipes));
  }, [recipes]);

  /**
   * Function to handle adding of new recipes
   */
  const addRecipeHandler = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'Plain Sandwich',
      servings: 3,
      cookTime: '1:45',
      instructions:
        '1. Put salt on bread\n2. Put bread in oven\n3. Eat sandwich.',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Bread Slice',
          amount: '2',
        },
        {
          id: uuidv4(),
          name: 'Salt',
          amount: '2 Tbs',
        },
      ],
    };
    setRecipes([...recipes, newRecipe]);
  };

  /**
   * Function to delete the recipe
   * @param {number} id
   */
  const deleteRecipeHandler = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  /**
   * Recipe Context API value for Large Scale State Management
   */
  const recipeContextValue = {
    addRecipe: addRecipeHandler,
    deleteRecipe: deleteRecipeHandler,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <div className='container__recipe'>
        <RecipeList recipes={recipes} />
      </div>
      <div className='container__recipe-edit'>
        <RecipeForm />
      </div>
    </RecipeContext.Provider>
  );
};

const sampleRecipes = [
  {
    id: uuidv4(),
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken.',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Chicken',
        amount: '2 kg',
      },
      {
        id: uuidv4(),
        name: 'Salt',
        amount: '1 Tbs',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Plain Pork',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on pork\n2. Put pork in oven\n3. Eat pork.',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Pork',
        amount: '1 kg',
      },
      {
        id: uuidv4(),
        name: 'Salt',
        amount: '2 Tbs',
      },
    ],
  },
];

export default App;
