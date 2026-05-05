const textElement = document.getElementById('text-element');
const randomizeBtn = document.getElementById('randomize-btn');

randomizeBtn.addEventListener('click', () => {
    textElement.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
});