const sessaoDois = document.querySelector("#sessao-dois");
const cards = document.querySelectorAll(".cards");
const sections = document.querySelectorAll(".hidden");
const botaoQA = document.querySelector(".qaButton");
const botaoDev = document.querySelector(".devButton");
const paginaUm = document.querySelector(".pageOne");
const paginaDois = document.querySelector(".pageTwo");
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

botaoDev.addEventListener('click', function(){
    paginaUm.style.display = 'none';
    paginaDois.style.display = 'inline';
})

botaoQA.addEventListener('click', function(){
    paginaUm.style.display = 'inline';
    paginaDois.style.display = 'none';
})