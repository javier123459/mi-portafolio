// Agregar clase de animación al hacer scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            section.classList.add("visible");
        }
    });
});
