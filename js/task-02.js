const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientItems = ingredients.map((ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.classList.add("item");
  ingredientItemEl.textContent = ingredient;
  return ingredientItemEl;
});

ingredientsList.append(...ingredientItems);
console.log(ingredientsList);