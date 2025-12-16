// Scroll hero
document.getElementById("btnScroll").addEventListener("click", () => {
    document.getElementById("videos").scrollIntoView({ behavior: "smooth" });
});

// Reveal
const reveals = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Form backend
document.getElementById("contactForm").addEventListener("submit", async e => {
    e.preventDefault();

    const data = {
        nombre: e.target.nombre.value,
        email: e.target.email.value,
        mensaje: e.target.mensaje.value
    };

    const res = await fetch("http://localhost:3000/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        alert("Mensaje enviado");
        fbq && fbq('track', 'Lead');
        e.target.reset();
    } else {
        alert("Error al enviar");
    }
});
