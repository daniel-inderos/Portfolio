// script.js
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
        alert(`You clicked on ${event.target.textContent}`);
    });
});
