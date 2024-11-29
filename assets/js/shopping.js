// variables get from localStorage and DOM
const ingredientsList = JSON.parse(localStorage.getItem('ingredientsList')) || [];
const recipesContainer = document.getElementById('RecipesContainer');
const ingredientsContainer = document.getElementById('ingredientsContainer');

// Display recipes

function displayRecipes() {
    // Checks if the array is missing or empty, if so, displays no recipes added
    if (!ingredientsList || ingredientsList.length === 0) {
        const li = document.createElement('li');
        li.className = 'item';
        li.textContent = "No recipes added";
        recipesContainer.appendChild(li);
    }
    // Create elements for each recipe
    else {
        ingredientsList.forEach(recipe => {
            const li = document.createElement('li');
            li.className = 'item';
            li.textContent = recipe.title;
            recipesContainer.appendChild(li);
        });
    }
}


// Display ingredients
function displayIngredients() {
    if (!ingredientsList || ingredientsList.length === 0) {
        const li = document.createElement('li');
        li.className = 'item';
        li.textContent = "Select a receipe to get started";
        ingredientsContainer.appendChild(li);
    } else {
        // Loop through each recipe's ingredients
        ingredientsList.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.className = 'item';
                li.textContent = ingredient;
                ingredientsContainer.appendChild(li);
            });
        })
    }
}

displayRecipes(ingredientsList, recipesContainer);
displayIngredients(ingredientsList, ingredientsContainer);