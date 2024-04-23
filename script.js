const sessaoDois = document.querySelector("#sessao-dois");
const cards = document.querySelectorAll(".cards");
const sections = document.querySelectorAll(".hidden");
const contactElements = {
    linkedin: document.querySelector(".linkedin"),
    whatsapp: document.querySelector(".whatsapp"),
    email: document.querySelector(".email")
}

contactElements.linkedin.addEventListener('click', () => acessaSite("www.google.com.br"));

const acessaSite = (url) => {
    window.location.href = url;
}

const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

sections.forEach(section => myObserver.observe(section));