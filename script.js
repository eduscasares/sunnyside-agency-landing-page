document.addEventListener('DOMContentLoaded', function () {

const toggleMenu = document.getElementById('toggleMenu');
const mobileMenu = document.getElementById('mobileMenu');

toggleMenu.addEventListener('click', () => {
    console.log('hiciste clic')
    mobileMenu.classList.toggle('active');
})

}, false);