document.getElementById('CF1').addEventListener('click', function() {
    $('.ui.modal').modal('show');
});
document.getElementById('CF2').addEventListener('click', function() {
    $('.ui.modal').modal('show');
});

const aboutButton = document.getElementById('aboutbtn');
const recipeButton = document.getElementById('recipebtn');
const listButton = document.getElementById('listbtn');

aboutButton.addEventListener('click', () => {
    window.location.href = 'about.html';
});

recipeButton.addEventListener('click', () => {
    window.location.href = 'recipe.html';
});

listButton.addEventListener('click', () => {
    window.location.href = 'shopping.html';
});