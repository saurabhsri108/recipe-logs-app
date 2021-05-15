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

export default sampleRecipes;
