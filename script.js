document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.textShadow = "0 0 8px var(--primary-color)";
        });
        
        link.addEventListener("mouseleave", function() {
            link.style.textShadow = "none";
        });
    });
});
