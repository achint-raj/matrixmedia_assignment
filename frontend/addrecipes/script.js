var recipeForm = document.getElementById("recipeForm");
var recipeList = document.getElementById("recipeList");
var searchInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchButton");

recipeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var recipeName = document.getElementById("recipeName").value;
    var recipeDescription = document.getElementById("recipeDescription").value;
    var recipeIngredients = document.getElementById("recipeIngredients").value;

    var recipeItem = document.createElement("li");
    recipeItem.classList.add("recipe-item");
    recipeItem.innerHTML = ` <h3>${recipeName}</h3>
    <p>${recipeDescription}</p>
    <p><strong>Ingredients:</strong> ${recipeIngredients}</p>`;

    recipeList.appendChild(recipeItem);

    recipeForm.reset();
});

searchButton.addEventListener("click", function(){
    var searchedrecipe = searchInput.value.toLowerCase();

    var recipeItems = recipeList.getElementsByClassName("recipe-item");
    for(var i=0;i<recipeItems.length;i++){
        var recipeItem = recipeItems[i];
        var recipeText = recipeItem.textContent.toLowerCase();
        // console.log(recipeItem.querySelector("h3"));
        // console.log(recipeText);  //using just for checking
        if (recipeText.includes(searchedrecipe)) {
            recipeItem.style.display = "block";
          } else {
            recipeItem.style.display = "none";
          }
    }
});

