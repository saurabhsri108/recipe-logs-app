import { v4 as uuidv4 } from 'uuid';
const newRecipeTemplate = {
  name: 'New Recipe',
  servings: 0,
  cookTime: '',
  instructions: '',
  ingredients: [
    {
      id: uuidv4(),
      name: '',
      amount: '',
    },
    {
      id: uuidv4(),
      name: '',
      amount: '',
    },
  ],
};

export default newRecipeTemplate;
