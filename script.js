document.addEventListener("DOMContentLoaded", () => {
    // Texto para o efeito de digitação
    const text = "Matheus Evaristo";
    const typingText = document.getElementById("typing-text");
    let index = 0;

    // Função para realizar o efeito de digitação
    function type() {
        if (index < text.length) {
            typingText.innerHTML += text[index];
            index++;
            setTimeout(type, 100); // Velocidade da digitação (100ms por caractere)
        } else {
            typingText.style.borderRight = "none"; // Remove o cursor piscante no final
        }
    }

    type();
});

// Efeito de Sombra ao Passar o Mouse nos Links do Nav
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("nav ul li a");

    links.forEach((link) => {
        // Adiciona o efeito de sombra ao passar o mouse
        link.addEventListener("mouseover", function () {
            link.style.textShadow = "0 0 8px #1DB954"; // Cor verde destacada
        });

        // Remove o efeito de sombra ao sair
        link.addEventListener("mouseleave", function () {
            link.style.textShadow = "none";
        });
    });
});

// Efeito de Aparição Gradual nos Links do Nav
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("nav ul li a");

    links.forEach((link, index) => {
        link.style.opacity = "0"; // Começa invisível
        setTimeout(() => {
            link.style.opacity = "1"; // Efeito de aparição
            link.style.transition = "opacity 1s ease";
        }, index * 200); // Adiciona um pequeno delay para cada link (efeito em cascata)
    });
});

// Ajustar Responsividade do Texto no Título (Opcional)
window.addEventListener("resize", () => {
    const typingText = document.getElementById("typing-text");
    if (window.innerWidth < 768) {
        typingText.style.fontSize = "24px"; // Tamanho menor para dispositivos móveis
    } else {
        typingText.style.fontSize = "48px"; // Tamanho padrão
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a"); // Seleciona os links do menu de navegação

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evita o comportamento padrão do clique
            const targetId = link.getAttribute("href").substring(1); // Remove o "#" do ID
            const targetElement = document.getElementById(targetId);

            // Calcula o deslocamento (ajuste para parar certinho no título)
            const offset = 80; // Altura do deslocamento (por exemplo, altura do header fixo)
            const targetPosition = targetElement.offsetTop - offset;

            // Rola suavemente até o local ajustado
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Configuração para a seção "Sobre"
    const sobreHeader = document.querySelector("#sobre .sobre-header");
    const sobreConteudo = document.querySelector("#sobre .sobre-conteudo");
    const sobreSeta = document.querySelector("#sobre .seta");

    sobreHeader.addEventListener("click", () => {
        sobreConteudo.classList.toggle("mostrar");
        sobreSeta.classList.toggle("girar");
    });

    // Configuração para a seção "Ferramentas"
    const ferramentasHeader = document.querySelector("#ferramentas .ferramentas-header");
    const ferramentasConteudo = document.querySelector("#ferramentas .ferramentas-conteudo");
    const ferramentasSeta = document.querySelector("#ferramentas .seta");

    ferramentasHeader.addEventListener("click", () => {
        ferramentasConteudo.classList.toggle("mostrar");
        ferramentasSeta.classList.toggle("girar");
    });

    // Configuração para a seção "Acadêmico"
    const academicoHeader = document.querySelector("#academico h2");
    const academicoConteudo = document.querySelectorAll("#academico .educacao");
    const academicoSeta = document.querySelector("#academico .seta");

    academicoHeader.addEventListener("click", () => {
        academicoConteudo.forEach((item) => item.classList.toggle("mostrar"));
        academicoSeta.classList.toggle("girar");
    });

    // Configuração para a seção "Experiências"
    const experienciasHeader = document.querySelector("#experiencias h2");
    const experienciasConteudo = document.querySelectorAll("#experiencias .experiencia");
    const experienciasSeta = document.querySelector("#experiencias .seta");

    experienciasHeader.addEventListener("click", () => {
        experienciasConteudo.forEach((item) => item.classList.toggle("mostrar"));
        experienciasSeta.classList.toggle("girar");
    });

    // Configuração para a seção "Projetos"
    const projetosHeader = document.querySelector("#projetospessoais h2");
    const projetosConteudo = document.querySelector("#projetospessoais ul");
    const projetosSeta = document.querySelector("#projetospessoais .seta");

    projetosHeader.addEventListener("click", () => {
        projetosConteudo.classList.toggle("mostrar");
        projetosSeta.classList.toggle("girar");
    });
});


