document.addEventListener("DOMContentLoaded", () => {
    
    // --- EFEITO DE DIGITAÇÃO PARA O TÍTULO ---
    const text = "Matheus Evaristo";
    const typingText = document.getElementById("typing-text");
    if (typingText) {
        let index = 0;
        function type() {
            if (index < text.length) {
                typingText.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 100);
            } else {
                // Remove o cursor piscante no final da animação
                typingText.style.borderRightColor = "transparent";

            }
        }
        type();
    }

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    if (menuIcon && navMenu) {
        menuIcon.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // --- ROLAGEM SUAVE E FECHAMENTO DO MENU AO CLICAR NO LINK ---
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");
            if (href.startsWith("#")) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80; // Altura do header para dar espaço
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
                
                // Fecha o menu hambúrguer (se estiver aberto) após o clique
                if (navMenu.classList.contains("active")) {
                    navMenu.classList.remove("active");
                }
            }
        });
    });

    // --- LÓGICA OTIMIZADA PARA SEÇÕES RECOLHÍVEIS ---
    const sections = [
        { header: ".sobre-header", content: ".sobre-conteudo", seta: "#sobre .seta" },
        { header: ".ferramentas-header", content: ".ferramentas-conteudo", seta: "#ferramentas .seta" },
        { header: ".academico-header", content: ".academico-conteudo", seta: "#academico .seta" },
        { header: ".experiencias-header", content: ".experiencias-conteudo", seta: "#experiencias .seta" },
        { header: ".projetos-header", content: ".projetos-conteudo", seta: "#projetospessoais .seta" }
    ];

    sections.forEach(section => {
        const headerEl = document.querySelector(section.header);
        const contentEl = document.querySelector(section.content);
        const setaEl = document.querySelector(section.seta);

        if (headerEl && contentEl && setaEl) {
            headerEl.addEventListener("click", () => {
                contentEl.classList.toggle("mostrar");
                setaEl.classList.toggle("girar");
            });
        }
    });

});