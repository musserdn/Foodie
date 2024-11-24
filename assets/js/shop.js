const aboutButton = document.getElementById('aboutbtn');
const recipeButton = document.getElementById('recipebtn');
const listButton = document.getElementById('listbtn');

aboutButton.addEventListener('click', () => {
    window.location.href = 'about.html';
});

recipeButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

listButton.addEventListener('click', () => {
    window.location.href = 'shopping.html';
});