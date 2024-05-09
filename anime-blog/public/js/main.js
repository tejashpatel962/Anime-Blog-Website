document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('nav button');
    const menuItems = document.querySelector('nav div.hidden');

    menuButton.addEventListener('click', () => {
        menuItems.classList.toggle('hidden');
    });
});
