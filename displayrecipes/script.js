document.addEventListener("DOMContentLoaded", function() {
    var recipeData = [
      { name: "Recipe 1: Biryani", description: "Description 1: This is a vegetarian food, pretty much loved and cooked in India and other parts of the world", ingredients: "Ingredient 1:consists of ghee (clarified butter), Ingredient 2:" },
      { name: "Recipe 2: Fried Rice", description: "Description 2: This is a vegetarian food, pretty much loved and cooked in India", ingredients: "Ingredient 3: onions, carrots, tomatoes (optional), Ingredient 4" },
      { name: "Recipe 3: Dosa IDli", description: "Description 3: This is a vegetarian South Indian dish, pretty much loved and cooked in Southern India", ingredients: "Ingredient 5: consists of rice, Ingredient 6" },
      // Add more recipe data objects as needed
    ];
  
    var tbody = document.querySelector("tbody");
  
    // Loop through the recipe data and generate table rows
    recipeData.forEach(function(recipe) {
      var row = document.createElement("tr");
      row.innerHTML = `
        <td>${recipe.name}</td>
        <td>${recipe.description}</td>
        <td>${recipe.ingredients}</td>
      `;
      tbody.appendChild(row);
    });
  });
  
  
  
  
  
  
  