// Inicializa ícones Lucide
lucide.createIcons();

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

// Função Toggle Menu
function toggleMenu() {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        iconTag = icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Fecha ao clicar no link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) toggleMenu();
    });
});

// Efeito Navbar Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = window.scrollY > 50 ? '#050507' : 'rgba(10, 10, 12, 0.95)';
});