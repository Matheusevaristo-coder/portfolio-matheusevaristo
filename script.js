document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. JS PODEROSO: ANIMAÇÃO DE SCROLL (Intersection Observer) ---
    // Isso detecta quando um elemento '.reveal' entra na tela e adiciona a classe '.active'
    const observerOptions = {
        threshold: 0 // Revela também seções longas assim que entram na tela
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Se quiser que a animação aconteça apenas uma vez (recomendado), descomente abaixo:
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos com a classe .reveal
    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => scrollObserver.observe(el));


    // --- 2. MENU MOBILE ---
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll("#nav-menu a");

    if(menuIcon && navMenu){
        menuIcon.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuIcon.innerHTML = navMenu.classList.contains("active") ? "&times;" : "&#9776;";
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuIcon.innerHTML = "&#9776;";
            });
        });
    }

    // --- 3. EFEITO DE DIGITAÇÃO ---
    const text = "Matheus Evaristo";
    const typingElement = document.getElementById("typing-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 120);
        }
    }
    setTimeout(type, 500);
});
