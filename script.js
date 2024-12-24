
const hamIcon = document.querySelector('.ham-icon');
const navLinks = document.querySelector('.menu-links');

hamIcon.addEventListener('click', () => {
    hamIcon.classList.toggle('open');
    navLinks.classList.toggle('open');
});

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('focus', () => {
    searchInput.placeholder = '';
});

searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
        searchInput.placeholder = 'Was suchen Sie?';
    }
});

const searchInp = document.getElementById('search-inp');

searchInp.addEventListener('focus', () => {
    searchInp.placeholder = '';
});

searchInp.addEventListener('blur', () => {
    if (searchInp.value === '') {
        searchInp.placeholder = 'Was suchen Sie?';
    }
});



const background = document.getElementById('proje');
        let x = 0;
        function animate() {
            x -= 0.09;
            background.style.backgroundPosition = `${x}px 0`;
            requestAnimationFrame(animate);
        }
        animate();