// Iniciar Ícones
lucide.createIcons();

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Alternar ícone entre Menu e X
    const icon = navLinks.classList.contains('active') ? 'x' : 'menu';
    menuBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
    lucide.createIcons();
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Fechar menu ao clicar em qualquer link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if(navLinks.classList.contains('active')) toggleMenu();
    });
});