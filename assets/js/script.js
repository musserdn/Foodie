// document.getElementById('CF1').addEventListener('click', function() {
// $('#CFM1').modal('show');
// });
// document.getElementById('CF2').addEventListener('click', function() {
// $('#CFM2').modal('show');
// });
// Event listener to all elements starting with 'CF' to open the modals
document.querySelectorAll('[id^="CF"]').forEach(element => {
    element.addEventListener('click', function () {
        const modalNumber = this.id.replace('CF', '');
        $(`#CFM${modalNumber}`).modal('show');
    });
});
// Event listeners for all modal buttons
let selectedRecipes = JSON.parse(localStorage.getItem('selectedRecipes')) || [];
//let ingredientsList = JSON.parse(localStorage.getItem('ingredientsList')) || [];
let ingredientsList = {}

document.querySelectorAll('.ui.long.large.modal .actions .ui.button').forEach(button => {
    button.addEventListener('click', function () {
        const recipeId = this.closest('.ui.long.large.modal').id;
        console.log(recipeId);

        // Extract ingredients from recipes:
        const ingredients = Array.from(document.querySelectorAll(`#${recipeId} .description ul li`))
           .map(li => {
            const span = li.querySelector('.ing');
            return span ? li.textContent.replace(span.textContent, '') : li.textContent.trim();
           })
           .join(', '); // Join them into a single string
        
        if (this.classList.contains('plus')) {
            if (!selectedRecipes.includes(recipeId)) {
                selectedRecipes.push(recipeId);
                ingredientsList[recipeId]= ingredients; // Store ingredients with recipe ID
                ingredientsList.push(ingredients);
            }
        } else if (this.classList.contains('minus')) {
            selectedRecipes = selectedRecipes.filter(id => id !== recipeId);
            delete ingredientsList[recipeId]; // Remove ingredients if recipe is deselected
        }

        localStorage.setItem('selectedRecipes', JSON.stringify(selectedRecipes));
        localStorage.setItem('ingredientsList', JSON.stringify(ingredientsList)); // Save ingredients to local storage
        $(`.ui.modal#${recipeId}`).modal('hide');
    });
});

console.log(selectedRecipes);
console.log(ingredientsList);

