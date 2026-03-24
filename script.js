/**
 * RAZGO - Script de Interatividade
 */

// 1. Inicializa os ícones do Lucide (Transforma i tags em SVGs)
lucide.createIcons();

// 2. Elementos do Menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

/**
 * Alterna o estado do menu mobile
 */
function toggleMenu() {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Altera o ícone entre 'menu' e 'x'
    const iconTag = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        iconTag.setAttribute('data-lucide', 'x');
    } else {
        iconTag.setAttribute('data-lucide', 'menu');
    }
    
    // Re-renderiza o ícone alterado
    lucide.createIcons();
}

// Ouvintes de Eventos
menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// 3. Fechar menu automaticamente ao clicar em um link de âncora
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// 4. Scroll Suave Manual (Opcional, o CSS já faz, mas garante compatibilidade)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});