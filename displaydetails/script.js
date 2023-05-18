






document.addEventListener("DOMContentLoaded", function() {
  var recipeData = [
    {
      name: "Recipe 1: Biryani",
      description: "Description 1: This is a vegetarian food, pretty much loved and cooked in India and other parts of the world.",
      ingredients: ["Ingredient 1: consists of ghee (clarified butter)", "Ingredient 2: mint, pepper, cardamom", "Ingredient 3: coriander, ginger, onions"]
    },
    {
      name: "Recipe 2: Fried Rice",
      description: "Description 1: This is a vegetarian food, pretty much loved and cooked in India and other parts of the world.",
      ingredients: ["Ingredient 1: consists of Rice", "Ingredient 2: onions, carrots, tomatoes (optional)", "Ingredient 3: Needs oil for cooking"]
    },
    {
      name: "Recipe 3: Dosa IDli",
      description: "Description 1: This is a vegetarian South Indian dish, pretty much loved and cooked in Southern India and other parts of the world.",
      ingredients: ["Ingredient 1: consists of rice", "Ingredient 2: onion potatoes", "Ingredient 3: chilli pepper"]
    }
  ];

  var recipeContainer = document.getElementById("recipeContainer");

  // Loop through recipeData array
  recipeData.forEach(function(recipe) {
    // Create elements to display recipe details
    var recipeDiv = document.createElement("div");
    var recipeName = document.createElement("h2");
    var recipeDescription = document.createElement("p");
    var recipeIngredients = document.createElement("ul");

    // Set the content of elements with recipe details
    recipeName.textContent = recipe.name;
    recipeDescription.textContent = recipe.description;

    // Generate list items for recipe ingredients
    recipe.ingredients.forEach(function(ingredient) {
      var listItem = document.createElement("li");
      listItem.textContent = ingredient;
      recipeIngredients.appendChild(listItem);
    });

    // Append elements to the recipe container
    recipeDiv.appendChild(recipeName);
    recipeDiv.appendChild(recipeDescription);
    recipeDiv.appendChild(recipeIngredients);
    recipeContainer.appendChild(recipeDiv);
  });
});
