function displayIngredients() {
    const ingredientsContainer = document.getElementById('ingredientsContainer');

    let ingredientsList = JSON.parse(localStorage.getItem('ingredientsList'));
    console.log(ingredientsList);

    const recipeIngredients = document.createElement('ul');
    let ingredients = ingredientsList
    recipeIngredients.innerHTML = `<h3>Ingredients:</h3><p>${ingredientsList}</p>`;
    for () {
            


 /*   
    document.querySelectorAll('.ui.right.floated.button').forEach(button => {
        button.addEventListener('click', function () {
            console.log("clicked");

            for (const [recipeId, ingredients] of Object.entries(ingredientsList)) {
                const recipeIngredients = document.createElement('div');
                recipeIngredients.innerHTML = `<h3>Ingredients for ${recipeId}:</h3><p>${ingredients}</p>`;
                ingredientsContainer.appendChild(recipeIngredients);
            }
        });
    });
}
*/

}
displayIngredients();