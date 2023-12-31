const data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "l lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" }
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the yellow squash and place in the oven for 30 mins.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Remove from oven. Add the lettuce and serve."
    ]
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "l lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" }
    ],
    steps: [
      "Cook the fish on the grill until cooked through.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese."
    ]
  }
];

function Recipe({ name, ingredients, steps }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name}: {ingredient.amount} {ingredient.measurement}
          </li>
        ))}
      </ul>
      <h3>Steps:</h3>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
root.render(
  <div>
    {data.map((recipe, index) => (
      <Recipe
        key={index}
        name={recipe.name}
        ingredients={recipe.ingredients}
        steps={recipe.steps}
      />
    ))}
  </div>
);
