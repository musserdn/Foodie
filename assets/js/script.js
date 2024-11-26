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

document.querySelectorAll('.ui.long.large.modal .actions .ui.button').forEach(button => {
    button.addEventListener('click', function () {
        const recipeId = this.closest('.ui.long.large.modal').id;
        console.log(recipeId);

        if (this.classList.contains('plus')) {
            if (!selectedRecipes.includes(recipeId)) {
                selectedRecipes.push(recipeId);
            }
        } else if (this.classList.contains('minus')) {
            selectedRecipes = selectedRecipes.filter(id => id !== recipeId);
        }

        localStorage.setItem('selectedRecipes', JSON.stringify(selectedRecipes));
        $(`.ui.modal#${modalId}`).modal('hide');
    });
});

console.log(selectedRecipes);